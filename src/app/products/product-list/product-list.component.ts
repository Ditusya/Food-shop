import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductModel} from '../models/product.model';
// import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // providers: [DataService]  в таком случае сервис будет жить столько сколько живет продакт лист
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Array<ProductModel>;
  // constructor(private dataService: DataService) {
  //   this.dataService.getData();
  // }
  constructor() {  }
  ngOnInit() {
    console.log(`[ngOninit]`);
    this.products = [
      {id: 1, name: 'Дыня', capacity: 10, isAvailable: true},
      {id: 2, name: 'Абрикос', capacity: 20, isAvailable: true},
      {id: 3, name: 'Банан', capacity: 15, isAvailable: true, description: 'Очень вкусный'},
      {id: 4, name: 'Лимон', capacity: 40, isAvailable: true},
      {id: 5, name: 'Лайм', capacity: 0, isAvailable: false}
    ];
  }
  ngOnDestroy() {
    console.log(`[ngOnDestroy]`);
    this.products.length = 0;
  }
onBuy(product: ProductModel): void {
    console.log(`[ProductListComponent]: ${product.name}`);
    const idx = this.products.findIndex((p) => p.id === product.id);
    if (idx !== -1) {
      if (this.products[idx].capacity > 0) {
      this.products[idx].capacity--; }
    }
}

}
// 5.	Удалите регистрацию сервиса из AppModule и добавьте ее в ProductsModule.
