import { Http, Headers } from '@angular/http';

export class HttpService {
    http: Http;
    headers: Headers;

    constructor(http: Http) {
        this.http = http;

        // Cria uma instância de Headers
        this.headers = new Headers();

        // Adiciona o tipo de conteúdo application/json 
        this.headers.append('Content-Type', 'application/json');
    }
}