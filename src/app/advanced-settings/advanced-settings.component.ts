import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advanced-settings',
  templateUrl: './advanced-settings.component.html',
  styleUrls: ['./advanced-settings.component.scss']
})
export class AdvancedSettingsComponent {

  constructor(private router: Router) {}

  navigateToSettings() {
    this.router.navigate(['/settings']);
  }

  navigateToConfigProfile() {
    this.router.navigate(['/config-profile']);
  }

  navigateToConfigAccount() {
    this.router.navigate(['/config-account']);
  }
}
