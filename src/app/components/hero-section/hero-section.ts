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
}
