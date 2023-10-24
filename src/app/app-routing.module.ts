import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { AdvancedSettingsComponent } from './advanced-settings/advanced-settings.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { PixAreaComponent } from './pix-area/pix-area.component';
import { ConfigProfileComponent } from './config-profile/config-profile.component';
import { ConfigAccountComponent } from './config-account/config-account.component';
import { ChangeBalanceComponent } from './change-balance/change-balance.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'advanced-settings', component: AdvancedSettingsComponent },
  { path: 'credit-card', component: CreditCardComponent },
  { path: 'pix-area', component: PixAreaComponent },
  { path: 'config-profile', component: ConfigProfileComponent },
  { path: 'config-account', component: ConfigAccountComponent },
  { path: 'change-balance', component: ChangeBalanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
