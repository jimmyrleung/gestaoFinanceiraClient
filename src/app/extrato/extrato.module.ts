import { NgModule } from '@angular/core';
import { ExtratoComponent } from './extrato.component';
import { CommonModule } from '@angular/common'; // Precisa ser importado para usarmos o *ngIf e o *ngFor

@NgModule({
    declarations: [ExtratoComponent], // Tudo que faz parte do ExtratoModule
    exports: [ExtratoComponent], // Tudo que queremos exportar
    imports: [CommonModule]
})
export class ExtratoModule {

}