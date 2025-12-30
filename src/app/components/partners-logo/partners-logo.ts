import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Partner {
  name: string;
  logo?: string;
}

@Component({
  selector: 'app-partners-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners-logo.html',
  styleUrls: ['./partners-logo.scss']
})
export class PartnersLogoComponent {
  partners: Partner[] = [
    { name: 'CMA CGM' },
    { name: 'COSCO' },
    { name: 'EVERGREEN' },
    { name: 'Hapag-Lloyd' },
    { name: 'HMMT' },
    { name: 'MAERSK' },
    { name: 'MSC' },
    { name: 'ONE' },
    { name: 'PIL' },
    { name: 'ZIM' }
  ];
}