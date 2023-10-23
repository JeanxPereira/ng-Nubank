import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.scss',
    '../../../node_modules/keen-slider/keen-slider.min.css'
  ],
})
export class HomeComponent {
  title = 'ng-nubank';

  @ViewChild('sliderRef')
  sliderRef!: ElementRef<HTMLElement>;
  @ViewChild('cardSliderRef')
  cardSliderRef!: ElementRef<HTMLElement>;
  @ViewChild('discoverCardSliderRef')
  discoverCardSliderRef!: ElementRef<HTMLElement>;

  slider?: KeenSliderInstance;
  cardSlider?: KeenSliderInstance;

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: false,
      mode: 'free',
      slides: {
        perView: 4.5,
        spacing: 14,
      },
    });

    this.slider = new KeenSlider(this.cardSliderRef.nativeElement, {
      loop: false,
      mode: 'free',
      slides: {
        perView: 1.5,
        spacing: 14,
      },
    });

    this.slider = new KeenSlider(this.discoverCardSliderRef.nativeElement, {
      loop: false,
      mode: 'free',
      slides: {
        perView: 2,
        spacing: 14,
      },
    });
  }

  navigateToSettings() {
    this.router.navigate(['/settings']);
  }

  isHidden = false;

  toggleEye() {
    const eyeIcon = this.el.nativeElement.querySelector('.eye-on') as HTMLElement;
    const balanceOriginal = this.el.nativeElement.querySelector('#balance') as HTMLElement;
    const balanceCircles = this.el.nativeElement.querySelector('#balance-hide') as HTMLElement;

    if (this.isHidden) {
      eyeIcon.innerHTML = '\ue840';
      this.renderer.setStyle(balanceOriginal, 'display', 'block');
      this.renderer.setStyle(balanceCircles, 'display', 'none');
    } else {
      eyeIcon.innerHTML = '\ue83f';
      this.renderer.setStyle(balanceOriginal, 'display', 'none');
      this.renderer.setStyle(balanceCircles, 'display', 'block');
    }

    this.isHidden = !this.isHidden;
  }
}
