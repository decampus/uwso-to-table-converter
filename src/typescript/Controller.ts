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
        this.text.push(text);
    }

    removeText(): void {
        this.text.pop();
    }

    getText(): Text[] {
        return this.text;
    }

    insertDocument(doc: Document) {
        this.doc.push(doc);
    }

    removeDocument(): void {
        this.doc.pop();
    }

    getDocument(): Document[] {
        return this.doc;
    }

    downloadFile(): void {
        this.doc[0].downloadFile();
    }
}