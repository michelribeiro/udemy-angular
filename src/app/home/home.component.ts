import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public boleto: boolean = false
  public debito: boolean = false


  constructor() { }

  ngOnInit() {
  }

  boletoShow():void {
    this.boleto = !this.boleto
  }

  debitoShow(): void {
    this.debito = !this.debito
  }


}
