import { Document } from "./classes/Document";
import { Text } from "./classes/Text";

export class Controller {
    private text: Text[];
    private doc: Document[];

    constructor() {
        this.text = new Array<Text>();
        this.doc = new Array<Document>();
    }

    insertText(text: Text): void {
        while (this.text.length) {
            this.removeText();
        }

        this.text.push(text);
    }

    private removeText(): void {
        this.text.pop();
    }

    getText(): Text[] {
        return this.text;
    }

    insertDocument(doc: Document) {
        while (this.doc.length) {
            this.removeDocument();
        }

        this.doc.push(doc);
    }

    private removeDocument(): void {
        this.doc.pop();
    }

    getDocument(): Document[] {
        return this.doc;
    }

    downloadFile(): void {
        if (this.text.length)
            this.doc[0].downloadFile();
        else
            console.error('Nothing to download');
    }
}