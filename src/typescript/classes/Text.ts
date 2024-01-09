export class Text {
    private content: string[];

    constructor(content: string) {
        this.content = content.split('\n');
    }

    hasHeader(): boolean {
        const regex = /Observations|Location|\d\s\w{3}\s\d{4}/gm;
        let match = false;

        for (const line of this.getContent()) {
            match = regex.test(line);

            if (match)
                return true;
        }

        return false;
    }

    private findFirstNonHeaderLine(): number {
        let index = -1;

        index = this.getContent().findIndex((element) => {
            return element.includes("STN");
        })

        return index;
    }

    removeHeader(): void {
        this.setContent(this.getContent().slice(this.findFirstNonHeaderLine()))
    }

    getContent() {
        return this.content;
    }

    setContent(content: string[]) {
        this.content = content;
    }
}