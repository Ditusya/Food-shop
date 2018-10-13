import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { DirModule } from '../common/dir/dir.module';

@NgModule({
  imports: [
    CommonModule,
    DirModule
  ],
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  exports: [
    ProductListComponent,
    DirModule// только то что добавлено в экспорт мы можем использовать ВНЕ модуля
     // мы добавляем ProductComponent и можем его использовать в app component
  ]
})
export class ProductsModule { }
