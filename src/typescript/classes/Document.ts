import { Text } from "./Text.js";

export class Document {
    private text: Text;

    constructor(text: Text) {
        this.text = text;
    }

    private splitTextContent(): string[][] {
        const newArr: string[][] = [];

        for (let line of this.text.getContent()) {
            newArr.push(line.split(" ").filter(Boolean))
        }

        try {
            newArr[1].unshift('');
        }
        finally {
            return newArr;
        }
    }

    downloadFile(): void {
        let content = 'data:text/csv;charset=utf-8;,';

        this.splitTextContent().forEach(function(row) {
            let newRow = row.join(',');

            content += newRow + '\r\n'
        })

        window.open(encodeURI(content));
    }
}