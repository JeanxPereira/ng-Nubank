import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAccountComponent } from './config-account.component';

describe('ConfigAccountComponent', () => {
  let component: ConfigAccountComponent;
  let fixture: ComponentFixture<ConfigAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigAccountComponent]
    });
    fixture = TestBed.createComponent(ConfigAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
