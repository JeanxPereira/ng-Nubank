import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-balance',
  templateUrl: './change-balance.component.html',
  styleUrls: ['./change-balance.component.scss']
})
export class ChangeBalanceComponent {
  valor: string = 'R$ 0,00';

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  onKeyPress(event: any) {
    // Verifique se o caractere digitado é um número (0-9)
    if (/[^0-9]/.test(event.key)) {
      event.preventDefault(); // Impede a entrada de caracteres não numéricos
    }
  }

  transformAmount() {
    if (this.valor !== null && this.valor !== undefined) {
      // Remove caracteres não numéricos
      this.valor = this.valor.replace(/[^\d]/g, '');

      // Se o valor for vazio ou igual a "0," defina-o como "0" para "R$ 0,00"
      if (this.valor === '' || this.valor === '0') {
        this.valor = '0';
      } else {
        // Formate o valor como uma moeda
        const numericValue = parseFloat(this.valor) / 100;
        this.valor = numericValue.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });
      }
    }
  }
}
