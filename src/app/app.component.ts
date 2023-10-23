import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, {KeenSliderInstance} from 'keen-slider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-nubank';

  prepareRoute(outlet: any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  @ViewChild('sliderRef')
  sliderRef!: ElementRef<HTMLElement>
  @ViewChild('cardSliderRef')
  cardSliderRef!: ElementRef<HTMLElement>
  @ViewChild('discoverCardSliderRef')
  discoverCardSliderRef!: ElementRef<HTMLElement>

  slider?: KeenSliderInstance
  cardSlider?: KeenSliderInstance

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: false,
      mode: 'free',
      slides: {
        perView: 4.5,
        spacing: 14
      }
    });

    this.slider = new KeenSlider(this.cardSliderRef.nativeElement, {
      loop: false,
      mode: 'free',
      slides: {
        perView: 1.5,
        spacing: 14
      }
    });
    
    this.slider = new KeenSlider(this.discoverCardSliderRef.nativeElement, {
      loop: false,
      mode: 'free',
      slides: {
        perView: 2,
        spacing: 14
      }
    });
  }

  constructor(private router: Router) {}

  navigateToSettings() {
    this.router.navigate(['/settings']);}
}
