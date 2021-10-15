const { readdir } = require("fs/promises");
const fs = require("fs");
var exif = require("exif").ExifImage;

var photos = {}
photos.data = []
var arr = [];
i = 0;

async function run(path) {
    try {
        const files = await readdir(path);


        const data = await photoDataObject(files, path)
            // const obj = await popupObject(files, path);
            // setTimeout(() => { writeOut(obj) }, 5000);
    } catch (err) {
        console.error(err);
    }
}

// Create an object for photo data
const photoDataObject = (files, path) => {
    return new Promise((resolve) => {
        for (const file of files) {
            try {
                new exif({ image: `${path}/${file}` }, function(error, exifData) {
                    if (error) {
                        console.log('Error: ' + error.message);
                    } else {
                        try {
                            latitude = exifData.gps.GPSLatitude;
                            longitude = exifData.gps.GPSLongitude;
                            latLongDecimal = parseGPS(latitude, longitude);
                            exifAltitude = exifData.gps.GPSAltitude; // Meters
                            var obj = {
                                name: file,
                                latitude: latLongDecimal[0],
                                longitude: latLongDecimal[1],
                                altitude: Math.round(exifAltitude * 3.28084) // Feet
                            };
                            console.log(obj);
                            arr.push(obj);
                        } catch (err) {
                            console.log(`Error: ${err} for file ${file}`);
                        }
                    }
                });
            } catch (error) {
                console.log('Error: ' + error.message);
            }
        }
        resolve(arr)
    });
}


// Create object for final popup data
const popupObject = (files) => {
    return new Promise((resolve) => {
        for (const file of files) {
            console.log(file);
            var obj = {
                type: "Feature",
                properties: obj = {
                    // "description": `<img src='${photosDirectory}/${file}' width='100%'><p>Altitude = ${Math.round(altitude)}ft</p>`,
                    "description": `<img src=' width='100%'><p>Altitude =ft</p>`,
                    "icon": "attraction-15"
                },
                geometry: obj = {
                    "type": "Point",
                    "coordinates": [-118.29203 + i, 36.57861333333334 + i]
                }
            }
            photos.data.push(obj);
            i++;
        }
        resolve(photos);
    });
}


// Write object to JSON
function writeOut(object) {
    new Promise((resolve, reject) => {
        fs.writeFile("popup-data.json", JSON.stringify(object), function(err) {
            if (err) {
                return reject(err.message);
            }
            resolve(console.log("File write complete"));
        });
    });
}

function parseGPS(lat, lon) {
    // https://gis.stackexchange.com/questions/136925/how-to-parse-exif-gps-information-to-lat-lng-decimal-numbers
    return [lat[0] + lat[1] / 60 + lat[2] / 3600, -1 * (lon[0] + lon[1] / 60 + lon[2] / 3600)];
}

run("./photos-test");

// console.log("did this go?");

// fs.writeFile("photo-data.json", JSON.stringify(photos), function(err) {
//     if (err) throw err;
//     console.log('complete');
// });