import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TransportType {
  value: string;
  label: string;
}

interface SortOption {
  value: string;
  label: string;
  checked: boolean;
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
  @Output() searchSubmitted = new EventEmitter<any>();

  transportTypes: TransportType[] = [
    { value: 'marine', label: 'Marine' },
    { value: 'flight', label: 'Flight' },
    { value: 'truck', label: 'Truck' }
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
    'Less container load (LCL)',
    'Bulk',
    
  ];

  transportUnits = [
    "Casablanca Port,MA",
    
  ];

  sortOptions: SortOption[] = [
    { value: 'fastest', label: 'Sort by fastest trips', checked: false },
    { value: 'cheapest', label: 'Sort by cheapest trips', checked: false }
  ];

  resultsCount = 129429;

  selectTransport(type: string): void {
    this.selectedTransport = type;
    this.transportChanged.emit(type);
  }

  toggleSchedules(): void {
    this.showSchedules = !this.showSchedules;
    this.transportChanged.emit('schedules');
  }

  onSearch(): void {
    const selectedSortOptions = this.sortOptions
      .filter(option => option.checked)
      .map(option => option.value);

    const searchData = {
      ...this.searchForm,
      transport: this.selectedTransport,
      sortBy: selectedSortOptions
    };

    console.log('Searching with:', searchData);
    this.searchSubmitted.emit(searchData);
  }
}