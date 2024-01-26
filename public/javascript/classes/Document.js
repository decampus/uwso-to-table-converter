export class Document {
    constructor(text) {
        this.text = text;
    }
    splitTextContent() {
        const newArr = [];
        for (let line of this.text.getContent()) {
            newArr.push(line.split(" ").filter(Boolean));
        }
        try {
            newArr[1].unshift('');
        }
        finally {
            return newArr;
        }
    }
    downloadFile() {
        let content = 'data:text/csv;charset=utf-8;,';
        this.splitTextContent().forEach(function (row) {
            let newRow = row.join(',');
            content += newRow + '\r\n';
        });
        window.open(encodeURI(content));
    }
}
//# sourceMappingURL=Document.js.map