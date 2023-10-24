import { Component, ElementRef, ViewChild, Renderer2 } from "@angular/core";
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: [
    '../../../node_modules/keen-slider/keen-slider.min.css',
    './credit-card.component.scss'
  ]
})
export class CreditCardComponent {
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>
  @ViewChild("carouselSliderRef") carouselSliderRef!: ElementRef<HTMLElement>

  prepareRoute(outlet: any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  currentSlide: number = 0
  dotHelper: Array<Number> = []
  slider?: KeenSliderInstance;
  carouselSlider?: KeenSliderInstance;

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      initial: this.currentSlide,
      rubberband: false,
      slides: {
        perView: 1.1,
        spacing: 25,
      },
      slideChanged: (s) => {
        this.currentSlide = s.track.details.rel
      },
    })

    this.slider = new KeenSlider(this.carouselSliderRef.nativeElement, {
      loop: false,
      mode: 'free',
      slides: {
        perView: 4.5,
        spacing: 14,
      },
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }

  navigateToHome() {
    this.router.navigate(['/home']);}

}
