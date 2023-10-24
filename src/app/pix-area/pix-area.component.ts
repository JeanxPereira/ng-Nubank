import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pix-area',
  templateUrl: './pix-area.component.html',
  styleUrls: [
    './pix-area.component.scss',
    '../../../node_modules/keen-slider/keen-slider.min.css'
  ],
})
export class PixAreaComponent {

  constructor(private router: Router) {}

  @ViewChild('sliderRef')
  sliderRef!: ElementRef<HTMLElement>;
  slider?: KeenSliderInstance;

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: false,
      mode: 'free',
      slides: {
        perView: 4.5,
        spacing: 14,
      },
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);}

}
