import os
import json
from exif import Image

directory = "./photos"
outputList = []

def openFile(path):
    with open(path, "rb") as file:
        pic = Image(file)
        readExif(pic)
        

def readExif(pic):
    if pic.has_exif:
        try: 
            print(f"{entry.path} contains EXIF (version {pic.exif_version}) information.")
            print(pic.gps_latitude)
            print(f"Latitude: {pic.gps_latitude} {pic.gps_latitude_ref}")
            print(f"Longitude: {pic.gps_longitude} {pic.gps_longitude_ref}")
            data = parseGPS(pic.gps_latitude, pic.gps_latitude_ref, pic.gps_longitude, pic.gps_longitude_ref, pic.gps_altitude)
            dataObject = createPhotoDataObject(data, entry.path)
            outputList.append(dataObject)
        except AttributeError:
            print(f"Attribute does not exist for {entry.path}")
    else:
        print(f"No EXIF information for {entry.path}")


def parseGPS(lat, lat_ref, lon, lon_ref, alt):
    coordinates = [lat[0] + lat[1]/60 + lat[2]/3600, lon[0] + lon[1]/60 + lon[2]/3600, alt*3.28084] # Convert altitude to feet
    if lat_ref == "S":
        coordinates[0] = coordinates[0]*-1
    if lon_ref == "W":
        coordinates[1] = coordinates[1]*-1
    return(coordinates)


def createPhotoDataObject(data, path):
    # Create dictionary
    obj = {
        "type": "Feature",
        "properties": {
            "description": f"<img src='{path}' width='100%'><p>Altitude = {round(data[2])}ft</p>",
            "icon": "attraction-15"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [data[1], data[0]]
        }
    }
    return(obj)


for entry in os.scandir(directory):
    if (entry.path.endswith(".jpg")
            or entry.path.endswith(".png")) or entry.path.endswith(".JPG") and entry.is_file():
        openFile(entry.path)
    print("\n")

with open("popup-data.js", "w") as f:
    f.write("export const features = ")
    json.dump(outputList, f)
    f.close