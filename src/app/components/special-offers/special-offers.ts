import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TransitPoint {
  duration: string;
}

interface RoutePoint {
  location: string;
  country: string;
  flag: string;
  date: string;
  time: string;
}

interface Offer {
  type: string;
  typeIcon: string; // from icons folder
  headerColor: string; // background color for header bar
  company: string;
  companyLogo: string; // from offre folder
  duration: string;
  loadType: string;
  containerSize: string;
  origin: RoutePoint;
  transit?: TransitPoint[];
  destination: RoutePoint;
  price: string;
}

@Component({
  selector: 'app-special-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './special-offers.html',
  styleUrls: ['./special-offers.scss']
})
export class SpecialOffersComponent {
  offers: Offer[] = [
    {
      type: 'Marine shipping',
      typeIcon: 'marine.svg',
      headerColor: '#e0efff',
      company: 'MAERSK',
      companyLogo: 'MAERSK.svg',
      duration: '19h',
      loadType: 'Full Container Load',
      containerSize: "40' Standard",
      origin: {
        location: 'Casablanca Port',
        country: 'MA',
        flag: 'Maroc.svg',
        date: '11/06/2025',
        time: '15:00'
      },
      transit: [{ duration: '3h' }],
      destination: {
        location: 'Mallorca',
        country: 'SPA',
        flag: 'Mallorca.svg',
        date: '11/05/2025',
        time: '09:10'
      },
      price: '$1,928.00'
    },
    {
      type: 'Truck transport',
      typeIcon: 'truck.svg',
      headerColor: '#e0ffed',
      company: 'Hapag-Lloyd',
      companyLogo: 'hapag.svg',
      duration: '19h',
      loadType: 'Less Container Load',
      containerSize: "20' Standard",
      origin: {
        location: 'Sunnyvale Harbor',
        country: 'CA',
        flag: 'harbor.svg',
        date: '12/07/2025',
        time: '16:30'
      },
      destination: {
        location: 'Tokyo',
        country: 'JPN',
        flag: 'tokyo.svg',
        date: '11/05/2025',
        time: '09:10'
      },
      price: '$3,209.00'
    },
    {
      type: 'Marine shipping',
      typeIcon: 'marine.svg',
      headerColor: '#e0efff',
      company: 'HMM',
      companyLogo: 'Shipping partner.svg',
      duration: '19h',
      loadType: 'Full Container Load',
      containerSize: "40' Standard",
      origin: {
        location: 'Lakeside Wharf',
        country: 'FL',
        flag: 'lakeside.svg',
        date: '14/09/2025',
        time: '18:15'
      },
      transit: [{ duration: '12h' }, { duration: '3h' }],
      destination: {
        location: 'Berlin',
        country: 'GER',
        flag: 'harbor.svg',
        date: '11/05/2025',
        time: '09:10'
      },
      price: '$2,390.00'
    },
    {
      type: 'Air freight',
      typeIcon: 'flight.svg',
      headerColor: '#ffefe0',
      company: 'COSCO SHIPPING',
      companyLogo: 'COSCO.svg',
      duration: '19h',
      loadType: 'Full Container Load',
      containerSize: "40' Standard",
      origin: {
        location: 'Riverview Dock',
        country: 'USA',
        flag: 'usa.svg',
        date: '13/08/2025',
        time: '17:45'
      },
      transit: [{ duration: '3h' }],
      destination: {
        location: 'Paris',
        country: 'FRA',
        flag: 'paris.svg',
        date: '11/05/2025',
        time: '09:10'
      },
      price: '$2,324.00'
    }
  ];
}
