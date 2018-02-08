import { Component, Input } from '@angular/core';

@Component({
    selector: 'Transacoes',
    templateUrl: './transacao.component.html'
})
export class TransacaoComponent {
    listagem = [
        { dataTransacao: "15/01/2018", descricao: "Recebimento Intelity", valor: 2980.00, tipo: "Recebimento" },
        { dataTransacao: "15/01/2018", descricao: "Pagamento Fatura", valor: 2200.00, tipo: "Despesa" },
        { dataTransacao: "15/01/2018", descricao: "Farmácia", valor: 38.47, tipo: "Despesa" },
        { dataTransacao: "19/01/2018", descricao: "Burger King", valor: 39.90, tipo: "Despesa" }
    ];

    warningMessage = "Mensagem a ser exibida quando não houver nada a ser mostrado no extrato.";

    @Input() title;

    closeWarningMessage() {
        this.warningMessage = "";
    }
}