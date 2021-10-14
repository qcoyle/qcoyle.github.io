var fs = require("fs");
var exif = require("exif").ExifImage;

var photos = {}
photos.data = []
photosDirectory = "./photos"
i = 5;

fs.readdir(photosDirectory, function(err, files) {
    if (err) {
        console.error(err);
    }
    console.log(files);
    files.forEach(function(file, index) {
        console.log(index);
        try {
            new exif({ image: `${photosDirectory}/${file}` }, function(error, exifData) {
                console.log(`Getting image data for file: ${file}`)
                if (error) {
                    console.log(`Error: ${error.message} for file ${file}`);
                } else {
                    latitude = exifData.gps.GPSLatitude;
                    longitude = exifData.gps.GPSLongitude;

                    // If there are gps data, put them in json
                    try {
                        decimalCoordinates = convertCoordinatesGPS(latitude, longitude);
                        altitude = exifData.gps.GPSAltitude * 3.28084; // Meters to feet

                    } catch (error) {
                        console.log(`Error: ${error.message} for file ${file}`)
                    }

                }
            });
        } catch (error) {
            console.log(`Error: ${error.message} for file ${file}`);
        }

        var obj = {
            type: "Feature",
            properties: obj = {
                // "description": `<img src='${photosDirectory}/${file}' width='100%'><p>Altitude = ${Math.round(altitude)}ft</p>`,
                "description": `<img src=' width='100%'><p>Altitude =ft</p>`,
                "icon": i + 5
            },
            geometry: obj = {
                "type": i,
                "coordinates": [i + 10, i - 10]
            }
        }
        photos.data.push(obj);


        // console.log(`file is ${file}`);
        // console.log(`index is ${index}`);
    });
});

// function getIndividualPhotoData(file, pathToPhotos) {
//     exec(`mdls ${pathToPhotos}/${file}`, (error, stdout, stderr) => {
//         if (error) {
//             console.log(`error: ${error.message}`);
//             return;
//         }
//         if (stderr) {
//             console.log(`stderr: ${stderr}`);
//             return;
//         }

//         return (`stdout: ${stdout}`);
//     });
// }

function convertCoordinatesGPS(lat, lon) {
    // https://gis.stackexchange.com/questions/136925/how-to-parse-exif-gps-information-to-lat-lng-decimal-numbers
    return [lat[0] + lat[1] / 60 + lat[2] / 3600, -1 * (lon[0] + lon[1] / 60 + lon[2] / 3600)];
}

console.log("did this go?");

fs.writeFile("photo-data.json", JSON.stringify(photos), function(err) {
    if (err) throw err;
    console.log('complete');
});