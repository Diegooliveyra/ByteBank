import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor!: number;
  destino!: number;

  @Output() aotransferi = new EventEmitter<any>();
  constructor() {}

  transferir(): void {
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aotransferi.emit(valorEmitir);
  }
}
