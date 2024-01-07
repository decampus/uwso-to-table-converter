export class Text {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    hasHeader(): boolean {
        const regex = /Observations|Location|\d\s\w{3}\s\d{4}/gm;
        const match = regex.exec(this.getContent());

        if (match)
            return true;

        return false;
        
    }

    getContent() {
        return this.content;
    }

    setContent(content: string) {
        this.content = content;
    }
}