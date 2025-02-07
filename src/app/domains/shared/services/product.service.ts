import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient); //permite conectarnos enviar y resicir un request y procesar la informacion


  constructor() { }

  getProducts(category_id?: string){
    const url = new URL('https://api.escuelajs.co/api/v1/products'); //tenemos la url 
    if (category_id) {                                                //si la categoria existe la agrega si no no lo agrega en caso de la categira no exista hace la reques a productos y si existe lo agrega con el queryparam al final
      url.searchParams.set('categoryId', category_id);
    }
    return this.http.get<Product[]>(url.toString());
  }

  getOne(id: string){
    return this.http.get<Product>('https://api.escuelajs.co/api/v1/products/'+id);
  }
}
