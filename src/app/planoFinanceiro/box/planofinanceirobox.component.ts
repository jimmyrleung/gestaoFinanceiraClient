import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { DropDownItem } from './DropDownItem';
declare var jQuery: any; // It is imported globally on angular-cli.json, so we just need to declare it.

@Component({
    selector: 'PlanoFinanceiroBox',
    templateUrl: './planofinanceirobox.component.html'
})
export class PlanoFinanceiroBoxComponent {

    dropdownItemList: DropDownItem[] = []; // Também poderia ser listaPlanos: Array<Object> = []; 

    // Quando o angular ver que nosso Component depende de Http
    // Podemos solicitar uma instância de http ao Constructor
    constructor(http: Http) {
        http.get('http://localhost:3001/planosFinanceiros')
            .map(res => res.json()) // Mapeia nossa responsa em um JSON
            .subscribe(planos => {
                planos.forEach((p) => {
                    this.dropdownItemList.push(new DropDownItem(p.nome, p.id, p.isDefault));
                });
                this.initDropDown()
            });
    }

    initDropDown() {
        jQuery('.ui.dropdown').dropdown({
            onChange: function (value, text, $selectedItem) {
                console.log(value);
            },
            values: this.dropdownItemList
        });
    }
}