import { Text } from "./classes/Text.js";
const convert = document.getElementById('convert-button');
const textarea = document.getElementById('textarea');
convert.addEventListener('click', convertToTable);
function convertToTable() {
    if (textarea.value.length) {
        const text = new Text(textarea.value);
        if (text.hasHeader()) {
            text.removeHeader();
        }
        if (text.hasEqualSignLine()) {
            text.removeEqualSignLine();
        }
    }
}
//# sourceMappingURL=app.js.map