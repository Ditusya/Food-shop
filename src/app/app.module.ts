import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { MessageComponent } from './common/components/message/message.component';
// import { DirModule } from './common/dir/dir.module';


// если это у нас модуль то надо подключать декоратор @NgModule.
// компоненты, директивы и пайпы могут быть зареганы только в 1 модуле, они по дефолту приватные
// если мы хотим их использовать в другом модуле,
// то надо их регистрировать в экспорт в NG модуле и тогда они будут доступны другим модулям,
// только то что у одного модуля в экспорте можно использовать другим модулем в который мы его импортим
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent // тут компоненты\директивы\пайпы
  ],
  imports: [ // секция импорта, сюда прописываем МОДУЛИ типа форм модуль итд
    BrowserModule,
    ProductsModule
    // DirModule
  ],
  providers: [], // тут мы регистрируем наши сервисы и они будут являться глобальными
  bootstrap: [AppComponent]
})
export class AppModule { }


// 3 модуля, подумать какие должны быть публичными какие нет (каркас для магазина)
