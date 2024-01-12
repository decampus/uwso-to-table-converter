import { Document } from "./classes/Document";
import { Text } from "./classes/Text";

export class Controller {
    private text: Text[];
    private doc: Document[];

    constructor() {
        this.text = new Array<Text>();
        this.doc = new Array<Document>();
    }

    getContent(): Text[] {
        return this.text;
    }

    insertText(text: Text): void {
        this.text.push(text);
    }

    removeText(): void {
        this.text.pop();
    }

    insertDocument(doc: Document) {
        this.doc.push(doc);
    }

    removeDocument(): void {
        this.doc.pop();
    }
}