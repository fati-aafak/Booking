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
  
  backgroundImage = '/images/backhero.jpg';


  getBackgroundImageUrl(): string {
    return `url('${this.backgroundImage}')`;
  }

  onTransportChanged(transportType: string) {
    switch (transportType) {
      case 'flight':
        this.backgroundImage = '/images/flight.jpg';
        break;
      case 'truck':
        this.backgroundImage = '/images/truck.png';
        break;
      case 'schedules':
        this.backgroundImage = '/images/shea.jpg';
        break;
      case 'marine':
      default:
        this.backgroundImage = '/images/backhero.jpg';
        break;
    }
  }
}
