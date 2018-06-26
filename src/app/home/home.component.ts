import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  lista = [
    {name: 'link 1'},
    {name: 'link 2'}
  ]
  
  public current;

  public selectDia(event: any, item: any) {
    this.current = item.name
  }
  
  


  constructor() { }

  ngOnInit() {
  }

}
