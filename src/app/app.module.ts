import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExtratoModule } from './extrato/extrato.module';
import { PlanoFinanceiroBoxModule } from './planoFinanceiro/box/planofinanceirobox.module';
import { HttpModule } from '@angular/http'; // Injeção do Http na nossa aplicação
import 'rxjs/add/operator/map'; // Map para ObservableResponse
//import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ExtratoModule, PlanoFinanceiroBoxModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
