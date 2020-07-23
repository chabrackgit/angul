import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formation Angular 8';
  nombre = 37;
  bool = true;
  obj = {
    cle: 'valeur'
  };

  public square(nbr: number): number {
    return nbr*nbr;
  }
}
