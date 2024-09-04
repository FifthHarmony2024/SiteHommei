import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HommeiComponent } from './hommei.component';

describe('HommeiComponent', () => {
  let component: HommeiComponent;
  let fixture: ComponentFixture<HommeiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HommeiComponent]
    });
    fixture = TestBed.createComponent(HommeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
