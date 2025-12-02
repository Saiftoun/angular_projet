import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Products } from '../../services/products';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './all-products.html',
  styleUrls: ['./all-products.css'],
})
export class AllProducts implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  selectedCategory: string = 'All';

  constructor(
    private productsService: Products,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(): void {
    this.products = [];
    this.cdr.detectChanges();
    
    this.productsService.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.cdr.detectChanges();
      },
      (err) => {
        alert('Error loading products');
        this.cdr.detectChanges();
      }
    );
  }

  getCategories(): void {
    this.productsService.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
        this.cdr.detectChanges();
      },
      (err) => {
        alert('Error loading categories');
      }
    );
  }

  onCategoryChange(value: string): void {/*filter*/
    this.selectedCategory = value;
    
    if (value === 'All') {
      this.getProducts();
    } else {
      this.getProductsByCategory(value);
    }
  }

  getProductsByCategory(category: string): void {
    this.products = [];
    this.cdr.detectChanges();
    
    
    this.productsService.getProductsByCategory(category).subscribe(
      (res: any) => {
        this.products = res;
        this.cdr.detectChanges();
      },
      (err) => {
        this.cdr.detectChanges();
      }
    );
  }

}