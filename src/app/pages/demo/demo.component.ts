import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
}

@Component({
  selector: 'app-demo',
  standalone: true,
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  // Lista de productos de ejemplo
  products: Product[] = [
    { id: 1, name: 'Sourdough Bread',    image: '/assets/bakery.jpg', price: 3.50, category: 'Bakery' },
    { id: 2, name: 'Greek Yogurt',       image: '/assets/dairy.jpg',   price: 1.99, category: 'Dairy' },
    { id: 3, name: 'Avocado',            image: '/assets/grocery.jpg', price: 2.25, category: 'Grocery' },
    { id: 4, name: 'Salmon Sushi Roll',  image: '/assets/sushi.jpg',   price: 8.99, category: 'Sushi' },
    { id: 5, name: 'Fresh Orange Juice', image: '/assets/juice.jpg',   price: 4.50, category: 'Juice Bar' },
    // …añade más items según necesites
  ];

  // Extraemos categorías únicas
  categories: string[] = Array.from(new Set(this.products.map(p => p.category)));

  // Filtros activos
  selectedCategories: Set<string> = new Set();

  // Getter para productos filtrados
  get filteredProducts(): Product[] {
    if (this.selectedCategories.size === 0) {
      return this.products;
    }
    return this.products.filter(p => this.selectedCategories.has(p.category));
  }

  // Toggle de filtro
  toggleCategory(cat: string) {
    this.selectedCategories.has(cat)
      ? this.selectedCategories.delete(cat)
      : this.selectedCategories.add(cat);
  }
}
