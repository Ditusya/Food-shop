import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ProductModel} from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;
  @Output() buy: EventEmitter< ProductModel > = new EventEmitter< ProductModel >();
  // private serverData = {id:2, name:'Батон'}
  constructor() { }

  ngOnInit() { }
  onBuy(event: any) {
      console.log(`товар куплен $(this.product.name)`);
      console.log(event);
      this.buy.emit(this.product);
  }

}
