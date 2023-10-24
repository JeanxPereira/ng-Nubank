import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config-profile',
  templateUrl: './config-profile.component.html',
  styleUrls: ['./config-profile.component.scss']
})
export class ConfigProfileComponent {

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) {}

  navigateToAdvancedSettings() {
    this.router.navigate(['/advanced-settings']);
  }
}
