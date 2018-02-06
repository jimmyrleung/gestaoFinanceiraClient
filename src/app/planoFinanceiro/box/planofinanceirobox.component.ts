import { Component, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
declare var jQuery: any; // It is imported globally on angular-cli.json, so we just need to declare it.

@Component({
    selector: 'PlanoFinanceiroBox',
    templateUrl: './planofinanceirobox.component.html'
})
export class PlanoFinanceiroBoxComponent implements AfterViewInit {

    listaPlanos: Object[] = []; // Também poderia ser listaPlanos: Array<Object> = []; 

    // Quando o angular ver que nosso Component depende de Http
    // Podemos solicitar uma instância de http ao Constructor
    constructor(http: Http) {
        http.get('http://localhost:3001/planosFinanceiros')
            .map(res => res.json()) // Mapeia nossa responsa em um JSON
            .subscribe(planos => {
                this.listaPlanos = planos;
                console.log(this.listaPlanos);
            });
    }

    ngAfterViewInit() {
        jQuery('.ui.dropdown').dropdown({
            onChange: function (value, text, $selectedItem) {
                console.log(value);
            }
        });
    }
}