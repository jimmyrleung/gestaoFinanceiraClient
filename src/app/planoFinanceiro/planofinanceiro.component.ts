import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { DropDownItem } from '../shared/DropDownItem';
import { PlanoFinanceiro } from './PlanoFinanceiro';
import { PlanoFinanceiroService } from './planofinanceiro.service';
declare var jQuery: any; // It is imported globally on angular-cli.json, so we just need to declare it.

@Component({
    selector: 'PlanoFinanceiro',
    templateUrl: './planofinanceiro.component.html'
})
export class PlanoFinanceiroComponent {

    dropdownItemList: DropDownItem[] = []; // Também poderia ser listaPlanos: Array<Object> = []; 
    planoFinanceiroService: PlanoFinanceiroService;
    listagem: Array<PlanoFinanceiro> = [];

    // Quando o angular ver que nosso Component depende de Http
    // Podemos solicitar uma instância de http ao Constructor
    constructor(service: PlanoFinanceiroService) {
        this.planoFinanceiroService = service;

        this.planoFinanceiroService.getPlanosFinanceiros()
            .then(planos => {
                this.listagem = planos;

                planos.forEach((p) => {
                    this.dropdownItemList.push(new DropDownItem(p.nome, p.id, p.isDefault));
                });
                this.initDropDown();
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
