// src/app/pages/dashboard/dashboard.component.ts (añade la lista de categorías)
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Category { name: string; img: string; }

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [CommonModule],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  categories: Category[] = [
    { name: 'Deli',            img: 'deli.jpg' },
    { name: 'Juice Bar',       img: 'juice-bar.jpg' },
    { name: 'Cocina',          img: 'kitchen.jpg' },
    { name: 'Buffet',          img: 'buffet.jpg' },
    { name: 'Dairy',           img: 'dairy.jpg' },
    { name: 'Bakery',          img: 'bakery.jpg' },
    { name: 'Produce Fresca',  img: 'produce.jpg' }
  ];
}
