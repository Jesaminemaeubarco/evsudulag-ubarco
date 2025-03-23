import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  salesSummary = {
    totalSales: 1250,
    transactions: 45,
    revenue: 18500
  };

  products = [
    { name: 'Product 1', price: 150, stock: 20 },
    { name: 'Product 2', price: 250, stock: 15 },
    { name: 'Product 3', price: 100, stock: 30 },
  ];

  constructor() {}

  addToCart(product: any) {
    console.log(`Added ${product.name} to cart.`);
  }
}
