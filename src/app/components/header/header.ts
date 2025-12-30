import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  navItems = [
    { label: 'Home', link: '/', active: true },
    { label: 'Marketplace', link: '/marketplace', external: true },
    { label: 'Services', link: '/services' },
    { label: 'About us', link: '/about' },
    { label: 'Contact', link: '/contact' }
  ];
}