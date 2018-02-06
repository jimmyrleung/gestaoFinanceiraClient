import { Component, Input } from '@angular/core';

@Component({
    selector: 'Extrato',
    templateUrl: './extrato.component.html'
})
export class ExtratoComponent { 
    listagem = [];

    @Input() title;
}