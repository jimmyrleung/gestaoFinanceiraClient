import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanoFinanceiroComponent } from './planofinanceiro/planofinanceiro.component';
import { TransacaoComponent } from './transacao/transacao.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    //{ path: 'plano-financeiro', component: PlanoFinanceiroComponent },
    { path: 'extrato', component: TransacaoComponent },
    { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);