import { NgModule } from '@angular/core';
import { PlanoFinanceiroComponent } from './planofinanceiro.component';
import { CommonModule } from '@angular/common'; // Precisa ser importado para usarmos o *ngIf e o *ngFor

@NgModule({
    declarations: [PlanoFinanceiroComponent],
    exports: [PlanoFinanceiroComponent],
    imports: [CommonModule]
})
export class PlanoFinanceiroModule {

}