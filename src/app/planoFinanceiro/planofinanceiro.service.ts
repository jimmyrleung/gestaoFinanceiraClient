import { HttpService } from '../shared/HttpService';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { PlanoFinanceiro } from './PlanoFinanceiro';

@Injectable()
export class PlanoFinanceiroService extends HttpService {
    baseUrl: string = `${environment.apiUrl}/planosFinanceiros`;

    constructor(http: Http) {
        super(http);
    };

    getPlanosFinanceiros(): Promise<Array<PlanoFinanceiro>> {
        let lista = Array<PlanoFinanceiro>();

        return new Promise((resolve, reject) => {
            this.http.get(this.baseUrl)
                .map(res => res.json())
                .subscribe(planos => {
                    planos.forEach((p) => {
                        lista.push(new PlanoFinanceiro(p.id, p.nome, p.isDefault));
                    });

                    return resolve(lista);
                }, err => reject(err));
        });
    };
}