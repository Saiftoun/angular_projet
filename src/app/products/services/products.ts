import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Products {
  
  constructor(private http:HttpClient) {}  
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseApi + 'products');
  }

  getAllCategories(): Observable<any[]> {   

    return this.http.get<any[]>(environment.baseApi + 'products/categories');
  }
getProductsByCategory(category:string): Observable<any[]> {
  return this.http.get<any[]>(environment.baseApi + 'products/category/'+category);
}

}