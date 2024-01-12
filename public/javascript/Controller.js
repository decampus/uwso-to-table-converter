export class Controller {
    constructor() {
        this.text = new Array();
        this.doc = new Array();
    }
    getContent() {
        return this.text;
    }
    insertText(text) {
        this.text.push(text);
    }
    removeText() {
        this.text.pop();
    }
    downloadFile() {
        this.doc[0].downloadFile();
    }
}
//# sourceMappingURL=Controller.js.map