import { NgModule } from '@angular/core';
import { ExtratoComponent } from './extrato.component';

@NgModule({
    declarations: [ExtratoComponent], // Tudo que faz parte do ExtratoModule
    exports: [ExtratoComponent] // Tudo que queremos exportar
})
export class ExtratoModule {

}