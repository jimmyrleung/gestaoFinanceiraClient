import { NgModule } from '@angular/core';
import { TransacaoComponent } from './transacao.component';
import { CommonModule } from '@angular/common'; // Precisa ser importado para usarmos o *ngIf e o *ngFor
import { FiltroPorDescricao } from './transacao.pipes';

@NgModule({
    declarations: [TransacaoComponent, FiltroPorDescricao], // Tudo que faz parte do ExtratoModule
    exports: [TransacaoComponent, FiltroPorDescricao], // Tudo que queremos exportar
    imports: [CommonModule]
})
export class TransacaoModule {

}