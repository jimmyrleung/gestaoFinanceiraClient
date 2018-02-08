import { NgModule } from '@angular/core';
import { TransacaoComponent } from './transacao.component';
import { CommonModule } from '@angular/common'; // Precisa ser importado para usarmos o *ngIf e o *ngFor

@NgModule({
    declarations: [TransacaoComponent], // Tudo que faz parte do ExtratoModule
    exports: [TransacaoComponent], // Tudo que queremos exportar
    imports: [CommonModule]
})
export class TransacaoModule {

}