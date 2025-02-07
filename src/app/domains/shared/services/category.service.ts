import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient); //permite conectarnos enviar y resicir un request y procesar la informacion

  constructor() { }

    //filtrar por categorias
    getAll(){
      return this.http.get<Category[]>('https://api.escuelajs.co/api/v1/categories');
    }

}
