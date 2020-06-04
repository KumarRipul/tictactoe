import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errormessage',
  templateUrl: './errormessage.component.html',
  styleUrls: ['./errormessage.component.css']
})
export class ErrormessageComponent implements OnInit {
  errorMessage:String= ' Error!!!!!!, Invalid URL............*'

  constructor() { }

  ngOnInit(): void {
  }

}
