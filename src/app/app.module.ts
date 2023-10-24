import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { AdvancedSettingsComponent } from './advanced-settings/advanced-settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { NgChartsModule } from 'ng2-charts';
import { PixAreaComponent } from './pix-area/pix-area.component';
import { ConfigProfileComponent } from './config-profile/config-profile.component';
import { ConfigAccountComponent } from './config-account/config-account.component';
import { ChangeBalanceComponent } from './change-balance/change-balance.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    HomeComponent,
    AdvancedSettingsComponent,
    CreditCardComponent,
    PixAreaComponent,
    ConfigProfileComponent,
    ConfigAccountComponent,
    ChangeBalanceComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }