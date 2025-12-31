import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { PartnersLogoComponent } from './components/partners-logo/partners-logo';
import { SpecialOffersComponent } from './components/special-offers/special-offers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroSectionComponent,
    PartnersLogoComponent,
    SpecialOffersComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'booking-container';
}