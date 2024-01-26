import { Controller } from "./Controller.js";
import { Document } from "./classes/Document.js";
import { Text } from "./classes/Text.js";
const convert = document.getElementById('convert-button');
const clear = document.getElementById('clear-button');
const download = document.getElementById('download-button');
const textarea = document.getElementById('textarea');
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
    }
}
function clearTextarea() {
    if (textarea.value.length)
        textarea.value = "";
}
function downloadFile() {
    const doc = new Document(controller.getText()[0]);
    controller.insertDocument(doc);
    controller.downloadFile();
}
//# sourceMappingURL=app.js.map