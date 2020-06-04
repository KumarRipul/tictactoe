import { Component,Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'my-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent  {
  @Input() value: string;
  @Output('userClick') click = new EventEmitter<string>();

  @HostListener('click')
  clickHandler() {
    this.click.emit('');
  }

  constructor() { }



}
