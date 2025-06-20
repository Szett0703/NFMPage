// src/app/pages/dashboard/dashboard.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Category {
  name: string;
  img: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Carrusel de categorías (cards)
  categories: Category[] = [
    { name: 'Bakery',               img: 'bakery.jpg' },
    { name: 'Dairy',                img: 'dairy.jpg' },
    { name: 'Deli',                 img: 'deli.jpg' },
    { name: 'Juice Bar',            img: 'juice-bar.jpg' },
    { name: 'Healthy Kitchen',      img: 'kitchen.jpg' },
    { name: 'Fruits & Vegetables',  img: 'produce.jpg' },
    { name: 'Buffet',               img: 'buffet.jpg' },
    { name: 'Supplements',          img: 'suplements.jpg' }
  ];

  // Carrusel de imágenes infra1…infra10
  infraImages: string[] = [];
  constructor() {
    for (let i = 1; i <= 10; i++) {
      this.infraImages.push(`assets/infra${i}.jpg`);
    }
  }
}
