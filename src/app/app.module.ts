import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TransacaoModule } from './transacao/transacao.module';
import { PlanoFinanceiroModule } from './planoFinanceiro/planofinanceiro.module';
import { HttpModule } from '@angular/http'; // Injeção do Http na nossa aplicação
import 'rxjs/add/operator/map'; // Map para ObservableResponse
//import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TransacaoModule, HttpModule, PlanoFinanceiroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
