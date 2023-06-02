import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent {
  @Input() titulo = "Tabela de Produtos X";
  @Input() lista: any[] = [];
}
