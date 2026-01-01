import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { PartnersLogoComponent } from './components/partners-logo/partners-logo';
import { SpecialOffersComponent } from './components/special-offers/special-offers';
import { GlobalShippingComponent } from './components/global-shipping/global-shipping.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroSectionComponent,
    PartnersLogoComponent,
    SpecialOffersComponent,
    GlobalShippingComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'booking-container';
}