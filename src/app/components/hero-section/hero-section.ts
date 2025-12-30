import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from '../search-form/search-form';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, SearchFormComponent],
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.scss']
})
export class HeroSectionComponent {
  title = 'Find the Best Shipping Rates Fast';
  subtitle = 'Access quotes from several freight forwarders at once and find the best deal without the hassle.';
  
  partnerLogos = [
    '/images/parteners/Logo wrapper.png',
    '/images/parteners/Logo wrapper (1).png',
    '/images/parteners/Logo wrapper (2).png',
    '/images/parteners/Logo wrapper (3).png',
    '/images/parteners/Logo wrapper (4).png',
    '/images/parteners/Logo wrapper (5).png',
    '/images/parteners/Logo wrapper (6).png',
    '/images/parteners/Logo wrapper (7).png',
    '/images/parteners/Logo wrapper (8).png',
    '/images/parteners/Logo wrapper (9).png'
  ];
}
