import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

  /* 
   * para nao obrigatoriamente comocar valor ao iniciar um atributo
   * colocar a propriendade em tsconfig.json
   * "strictPropertyInitialization": false,
   */
  @Input() resultadoFilho: number; // = 0;
}
