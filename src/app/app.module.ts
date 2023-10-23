import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { AdvancedSettingsComponent } from './advanced-settings/advanced-settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Renderer2 } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    HomeComponent,
    AdvancedSettingsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }