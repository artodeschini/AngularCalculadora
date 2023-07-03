import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  /* 
   * para nao obrigatoriamente comocar valor ao iniciar um atributo
   * colocar a propriendade em tsconfig.json
   * "strictPropertyInitialization": false,
   */
  operandoA: number;// = 0;
  operandoB: number;// = 0;

  // vai encaminhar o envento ao componente pai
  @Output() resultadoSoma = new EventEmitter<number>();

  somar(): void {
    //this.resultado = this.operandoA + this.operandoB;
    let calculo = this.operandoA + this.operandoB;
    // envio
    this.resultadoSoma.emit(calculo);
  }
}
