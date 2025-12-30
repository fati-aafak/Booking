import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersLogo } from './partners-logo';

describe('PartnersLogo', () => {
  let component: PartnersLogo;
  let fixture: ComponentFixture<PartnersLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersLogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
