import { Controller } from "./Controller.js";
import { Document } from "./classes/Document.js";
import { Text } from "./classes/Text.js";
const convert = document.getElementById('convert-button');
const clear = document.getElementById('clear-button');
const download = document.getElementById('download-button');
const textarea = document.getElementById('textarea');
const downloadSection = document.getElementById('download-section');
convert.addEventListener('click', convertToTable);
clear.addEventListener('click', clearTextarea);
download.addEventListener('click', downloadFile);
const controller = new Controller();
function convertToTable() {
    if (textarea.value.length) {
        const text = new Text(textarea.value);
        if (text.hasHeader()) {
            text.removeHeader();
        }
        if (text.hasEqualSignLine()) {
            text.removeEqualSignLine();
        }
        controller.insertText(text);
        showDownloadSection();
    }
}
function clearTextarea() {
    if (textarea.value.length)
        textarea.value = "";
    hideDownloadSection();
}
function downloadFile() {
    const doc = new Document(controller.getText()[0]);
    controller.insertDocument(doc);
    controller.downloadFile();
}
function showDownloadSection() {
    downloadSection.style.display = "block";
}
function hideDownloadSection() {
    if (downloadSection.style.display === "block")
        downloadSection.style.display = "none";
}
//# sourceMappingURL=app.js.map