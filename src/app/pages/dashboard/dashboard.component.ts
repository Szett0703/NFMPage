import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Category { name: string; img: string; }

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  categories: Category[] = [
    { name: 'Panadería',       img: 'bakery.jpg' },
    { name: 'Lácteos',         img: 'dairy.jpg' },
    { name: 'Carnes frías',    img: 'deli.jpg' },
    { name: 'Jugos naturales', img: 'juice-bar.jpg' },
    { name: 'Cocina saludable',img: 'kitchen.jpg' },
    { name: 'Frutas y Verduras', img: 'produce.jpg' },
    { name: 'Buffet',          img: 'buffet.jpg' }
  ];
}
