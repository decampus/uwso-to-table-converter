export class Controller {
    constructor() {
        this.text = new Array();
        this.doc = new Array();
    }
    insertText(text) {
        while (this.text.length) {
            this.removeText();
        }
        this.text.push(text);
    }
    removeText() {
        this.text.pop();
    }
    getText() {
        return this.text;
    }
    insertDocument(doc) {
        while (this.doc.length) {
            this.removeDocument();
        }
        this.doc.push(doc);
    }
    removeDocument() {
        this.doc.pop();
    }
    getDocument() {
        return this.doc;
    }
    downloadFile() {
        this.doc[0].downloadFile();
    }
}
//# sourceMappingURL=Controller.js.map