import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent {
  @Input() titulo = "Formulário de Produtos";
  @Output() onSalvar = new EventEmitter<any>();
  produto: any = {id: 0, nome:'', preco: 0.0};

  cadastrar() {
    this.onSalvar.emit(this.produto);
    this.produto = {id: 0, nome:'', preco: 0.0};
  }
}

