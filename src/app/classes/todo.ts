export class Todo {
    id: number;
    text: string;
    checked: number;

    constructor(id: number, text: string, checked: number) {
        this.id = id;
        this.text = text;
        this.checked = 0;
    }
}
