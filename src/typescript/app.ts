import { Text } from "./classes/Text.js"

// Buttons
const convert = document.getElementById('convert-button') as HTMLButtonElement;
const textarea = document.getElementById('textarea') as HTMLTextAreaElement;

convert.addEventListener('click', convertToTable);

function convertToTable() {
    if (textarea.value.length) {
        const text = new Text(textarea.value);        
    }
}