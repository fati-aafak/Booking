import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ShippingType {
  value: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-form.html',
  styleUrls: ['./search-form.scss']
})
export class SearchFormComponent {
  @Output() transportChanged = new EventEmitter<string>();

  transportTypes: ShippingType[] = [
    { value: 'marine', label: 'Marine', icon: '⚓' },
    { value: 'flight', label: 'Flight', icon: '✈️' },
    { value: 'truck', label: 'Truck', icon: '🚚' }
  ];

  selectedTransport = 'marine';
  showSchedules = false;

  searchForm = {
    from: '',
    to: '',
    shippingType: '',
    transportUnit: '',
    date: '',
    isInterval: false
  };

  shippingTypes = [
    'Full container load (FCL)',
    'Less than container load (LCL)',
    'Break bulk'
  ];

  transportUnits = [
    "20' Standard",
    "40' Standard",
    "40' High Cube",
    "45' High Cube"
  ];

  sortOptions = [
    { value: 'fastest', label: 'Sort by fastest trips', checked: false },
    { value: 'cheapest', label: 'Sort by cheapest trips', checked: false }
  ];

  resultsCount = 129429;

  selectTransport(type: string) {
    this.selectedTransport = type;
    this.transportChanged.emit(type);
  }

  toggleSchedules() {
    this.showSchedules = !this.showSchedules;
    this.transportChanged.emit('schedules');
  }

  onSearch() {
    console.log('Searching with:', this.searchForm);
  }
}
