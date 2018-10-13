import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // говорит о том, что уже зарегистрирован в app модуле хоть внешне там ничего и не поменялось
})
export class DataService {

  constructor() {
    console.log('[DataService]');
  }
  getData(): void {
    console.log('DataService was called');
    }
}
