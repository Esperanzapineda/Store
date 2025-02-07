import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '@shared/services/product.service'
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  imports: [ CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {

  @Input() id?: string;
  product = signal<Product | null >(null);
  cover = signal(''); //para al hacer click cambie de imagen
  private productService = inject(ProductService);
  private cartSerservice = inject(CartService);

  ngOnInit() {
    if(this.id){
      this.productService.getOne(this.id)
      .subscribe({
        next: (product) => {
        this.product.set(product);
        if(product.images.length > 0) {
          this.cover.set(product.images[0]) //posicionar la primer imagen 
        }
        }
      })
    }
  }

  //metodo para hacer cambiar la imagen
  changeCover(newImg: string) {
    this.cover.set(newImg);
  }

  addToCart() {
    const product = this.product();
    if(product) {
      this.cartSerservice.addToCart(product);
    }
  }

}