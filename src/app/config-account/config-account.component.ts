import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config-account',
  templateUrl: './config-account.component.html',
  styleUrls: ['./config-account.component.scss']
})
export class ConfigAccountComponent {

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) {}

  navigateToAdvancedSettings() {
    this.router.navigate(['/advanced-settings']);
  }
}