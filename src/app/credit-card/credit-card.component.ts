import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import KeenSlider, { KeenSliderInstance } from "keen-slider"

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

  currentSlide: number = 0
  dotHelper: Array<Number> = []
  slider?: KeenSliderInstance;
  carouselSlider?: KeenSliderInstance;

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

}
