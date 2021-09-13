import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  valor!: number;
  destino!: number;

  transferir($event: any) {
    console.log($event);
  }
}
