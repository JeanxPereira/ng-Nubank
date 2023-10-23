import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { AdvancedSettingsComponent } from './advanced-settings/advanced-settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'slideFromBottom' } },
  { path: 'settings', component: SettingsComponent, data: { animation: 'slideFromBottom' } },
  { path: 'advanced-settings', component: AdvancedSettingsComponent, data: { animation: 'slideFromBottom' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
