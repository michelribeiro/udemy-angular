import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  formasPagamento = [
    {
      id: 1,
      nome: "Boleto bancário",
      tipoParcela: 1
    },
    {
      id: 1,
      nome: "Boleto bancário",
      tipoParcela: 2
    },
    {
      id: 3,
      nome: "Débito em conta",
      tipoParcela: 2
    }
  ]

  
  public current;

  public selectDia(event: any, item: any) {
    this.current = item.name
  }

  constructor() { }

  ngOnInit() {
  }

}
