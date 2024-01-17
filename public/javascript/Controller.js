export class Controller {
    constructor() {
        this.text = new Array();
        this.doc = new Array();
    }
    insertText(text) {
        this.text.push(text);
    }
    removeText() {
        this.text.pop();
    }
    getText() {
        return this.text;
    }
    insertDocument(doc) {
        this.doc.push(doc);
    }
    removeDocument() {
        this.doc.pop();
    }
    downloadFile() {
        this.doc[0].downloadFile();
    }
}
//# sourceMappingURL=Controller.js.map