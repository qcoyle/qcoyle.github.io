const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
    const fileList = this.files; /* now you can work with the file list */
    const numFiles = fileList.length;

    for (let i = 0, numFiles = fileList.length; i < numFiles; i++) {
        const file = fileList[i];
        file.text().then(data => download("cleaned-links-index.html", run(data, "https://www.google.com/url?q=")));
    }
}

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
    startIndex = file.indexOf("&amp", index);
    endIndex = file.indexOf('"', startIndex);
    return file.substring(0, startIndex) + file.substring(endIndex);
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}