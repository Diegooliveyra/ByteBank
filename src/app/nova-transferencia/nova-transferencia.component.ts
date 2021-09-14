import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor!: number;
  destino!: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir(): void {
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adcionarTransferencia(valorEmitir).subscribe(
      (resultado) => {
        this.router.navigate(['/extrato']);
        this.limparInput();
      },
      (error) => console.error(error)
    );
  }

  limparInput(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
