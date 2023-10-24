import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixAreaComponent } from './pix-area.component';

describe('PixAreaComponent', () => {
  let component: PixAreaComponent;
  let fixture: ComponentFixture<PixAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PixAreaComponent]
    });
    fixture = TestBed.createComponent(PixAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
