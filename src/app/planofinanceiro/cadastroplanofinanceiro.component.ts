import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { PlanoFinanceiro } from './PlanoFinanceiro';
import { HandleRequestError } from '../shared/HandleError';

@Component({
    selector: 'CadastroPlanoFinanceiro',
    templateUrl: './cadastroplanofinanceiro.component.html'
})
export class CadastroPlanoFinanceiroComponent {
    http: Http;
    planoFinanceiro: PlanoFinanceiro = new PlanoFinanceiro();
    errorMessage: string;
    successMessage: string;

    constructor(http: Http) {
        this.http = http;
    }

    cadastrar() {
        let headers = new Headers();
        headers.append("Content-type", "application/json");

        this.http.post("http://localhost:3001/planosfinanceiros", JSON.stringify(this.planoFinanceiro), new RequestOptions({ headers: headers }))
            .subscribe(() => {
                this.successMessage = "Plano financeiro incluído com sucesso!";
                this.planoFinanceiro = new PlanoFinanceiro();
                this.closeErrorMessage();
            }, error => {
                console.log(error);
                let errorHandler = new HandleRequestError(error.json());
                this.errorMessage = errorHandler.getRequestError();
                console.log(errorHandler.jsonError);
            });
    }

    closeErrorMessage() {
        this.errorMessage = "";
    }

    closeSuccessMessage() {
        this.successMessage = "";
    }
}
