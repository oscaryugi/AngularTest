import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-body',
  templateUrl: './web-body.component.html',
  styleUrls: ['./web-body.component.scss']
})
export class WebBodyComponent implements OnInit {
  newList: any = {};
  list: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  Agregar(): void{
    if(!this.newList.name)
      return;
    this.list.push(this.newList);
    this.newList = {};
  }
  Eliminar(item:any):void{
    let index = this.list.findIndex(f => f.name == item.name);
    this.list.splice(index,1);
  }
}
