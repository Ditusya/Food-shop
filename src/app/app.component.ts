import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book-Shop';
  visible = false;

constructor(private dataService: DataService) {

}
onToggle() {
  this.visible = !this.visible;
}
}
