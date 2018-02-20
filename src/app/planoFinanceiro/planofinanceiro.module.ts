import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlanoFinanceiroComponent } from './planofinanceiro.component';
import { CadastroPlanoFinanceiroComponent } from './cadastroplanofinanceiro.component';
import { CommonModule } from '@angular/common'; // Precisa ser importado para usarmos o *ngIf e o *ngFor
import { routing } from '../app.route';

@NgModule({
    declarations: [PlanoFinanceiroComponent, CadastroPlanoFinanceiroComponent],
    exports: [PlanoFinanceiroComponent, CadastroPlanoFinanceiroComponent],
    imports: [CommonModule, routing, FormsModule]
})
export class PlanoFinanceiroModule {

}