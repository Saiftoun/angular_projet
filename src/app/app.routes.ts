import { Routes } from '@angular/router';
import { AllProducts } from './products/components/all-products/all-products';
import { ProductsDetails } from './products/components/products-details/products-details';
import { Cart } from './carts/components/cart/cart';

export const routes: Routes = [
  { path: 'products', component: AllProducts },
  { path: 'details', component: ProductsDetails },
  { path: 'cart', component: Cart },
  { path: '**', redirectTo: 'products', pathMatch: 'full' }//if the path not found,this line will redirect to products
];