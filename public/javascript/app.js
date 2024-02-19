import { Controller } from "./Controller.js";
import { Document } from "./classes/Document.js";
import { Text } from "./classes/Text.js";
const convert = document.getElementById('convert-button');
const clear = document.getElementById('clear-button');
const download = document.getElementById('download-button');
const textarea = document.getElementById('textarea');
const downloadSection = document.getElementById('download-section');
const inputControls = document.getElementById('input-controls');
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
    else {
        triggerEmptyTextareaWarning();
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
function triggerEmptyTextareaWarning() {
    let div = document.createElement('div');
    let p = document.createElement('p');
    let text = document.createTextNode('Nothing to convert');
    p.appendChild(text);
    p.setAttribute('class', 'text-danger m-0');
    div.appendChild(p);
    div.setAttribute('id', 'empty-textarea-warning');
    div.setAttribute('class', 'mt-3 ps-1');
    div.setAttribute('display', 'flex');
    inputControls.appendChild(div);
    setTimeout(() => {
        inputControls.removeChild(document.getElementById('empty-textarea-warning'));
    }, 1500);
}
//# sourceMappingURL=app.js.map