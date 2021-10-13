import { run } from './modify-text.js';

const inputElement = document.getElementById("input"); // Object for HTML input element
inputElement.addEventListener("change", handleFiles, false); // Do this once input is clicked

function handleFiles() {
    const fileList = this.files;

    for (let i = 0, numFiles = fileList.length; i < numFiles; i++) {
        const file = fileList[i];
        file.text().then(data => download("cleaned-links-index.html", run(data, "https://www.google.com/url?q=")));
    }
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