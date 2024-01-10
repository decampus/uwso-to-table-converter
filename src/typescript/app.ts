import { Text } from "./classes/Text.js"

// Buttons
const convert = document.getElementById('convert-button') as HTMLButtonElement;
const clear = document.getElementById('clear-button') as HTMLButtonElement;
const textarea = document.getElementById('textarea') as HTMLTextAreaElement;

convert.addEventListener('click', convertToTable);
clear.addEventListener('click', clearTextarea);

function convertToTable() {
    if (textarea.value.length) {
        const text = new Text(textarea.value);
        
        if (text.hasHeader()) {
            text.removeHeader();
        }

        if (text.hasEqualSignLine()) {
            text.removeEqualSignLine();
        }

        console.log(text.getContent());
    }
}

function clearTextarea() {
    if (textarea.value.length)
        textarea.value = "";
}