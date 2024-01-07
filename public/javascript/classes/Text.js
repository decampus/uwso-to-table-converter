export class Text {
    constructor(content) {
        this.content = content;
    }
    hasHeader() {
        const regex = /Observations|Location|\d\s\w{3}\s\d{4}/gm;
        const match = regex.exec(this.getContent());
        if (match)
            return true;
        return false;
    }
    getContent() {
        return this.content;
    }
    setContent(content) {
        this.content = content;
    }
}
//# sourceMappingURL=Text.js.map