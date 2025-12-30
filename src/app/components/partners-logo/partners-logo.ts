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
    { name: 'COSCO SHIPPING' },
    { name: 'EVERGREEN' },
    { name: 'Hapag-Lloyd' },
    { name: 'HMM' },
    { name: 'MAERSK' },
    { name: 'MSC' },
    { name: 'ONE' },
    { name: 'PIL' },
    { name: 'ZIM' }
  ];

  // Méthode pour obtenir l'index du logo (1 à 9 + wrapper.png)
  getPartnerIndex(partnerName: string): number | string {
    const index = this.partners.findIndex(p => p.name === partnerName) + 1;
    // Si c'est le dernier (10ème), retourner juste le nom sans numéro
    return index === 10 ? '' : index;
  }

  // Méthode pour obtenir le chemin complet du logo
  getPartnerLogoPath(partner: Partner): string {
    const index = this.partners.findIndex(p => p.name === partner.name) + 1;
    if (index === 10) {
      return '/images/partners/Logo wrapper 10).png';
    }
    return `/images/partners/Logo wrapper (${index}).png`;
  }
}