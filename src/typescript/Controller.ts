import { Text } from "./classes/Text";

export class Controller {
    private text: Text[];

    constructor() {
        this.text = new Array<Text>();
    }

    getContent(): Text[] {
        return this.text;
    }
}