function run(file, flag) {
    var startIndex = 0,
        index;

    while ((index = file.indexOf(flag, startIndex)) > -1) {
        file = removeHead(index, file, flag);
        file = removeEnd(index, file);
    }

    return file;
}

function removeHead(index, file, flag) {
    return (file.substr(0, index) + file.substr(index + flag.length));
}

function removeEnd(index, file) {
    console.log(index);
    let startIndex = file.indexOf("&amp", index);
    let endIndex = file.indexOf('"', startIndex);
    return file.substring(0, startIndex) + file.substring(endIndex);
}

export { run };