import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TransacaoModule } from './transacao/transacao.module';
import { PlanoFinanceiroModule } from './planofinanceiro/planofinanceiro.module';
import { HttpModule } from '@angular/http'; // Injeção do Http na nossa aplicação
import 'rxjs/add/operator/map'; // Map para ObservableResponse
import { routing } from './app.route';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule, TransacaoModule, HttpModule, PlanoFinanceiroModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
