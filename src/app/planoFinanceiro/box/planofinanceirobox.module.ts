import { NgModule } from '@angular/core';
import { PlanoFinanceiroBoxComponent } from './planofinanceirobox.component';
import { CommonModule } from '@angular/common'; // Precisa ser importado para usarmos o *ngIf e o *ngFor

@NgModule({
    declarations: [PlanoFinanceiroBoxComponent],
    exports: [PlanoFinanceiroBoxComponent],
    imports: [CommonModule]
})
export class PlanoFinanceiroBoxModule {

}