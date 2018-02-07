export class DropDownItem {
    name: string;
    value: number;
    selected: boolean;
    constructor(name: string, value: number, selected: boolean) {
        this.name = name;
        this.value = value;
        this.selected = selected;
    }
}