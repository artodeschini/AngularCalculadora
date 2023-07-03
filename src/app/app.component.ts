import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';

  resultadoPai: number;

  processarResultado(result: number): void {
    this.resultadoPai = result;
  }

}
