export class Text {
    constructor(content) {
        this.content = content.split('\n');
    }
    hasHeader() {
        const regex = /Observations|Location|\d\s\w{3}\s\d{4}/gm;
        let match = false;
        for (const line of this.getContent()) {
            match = regex.test(line);
            if (match)
                return true;
        }
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