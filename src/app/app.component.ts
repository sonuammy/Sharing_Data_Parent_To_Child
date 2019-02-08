import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string = 'Sharing Data from Parent to Child Component';
  phonenumber: number = 8073786788;
  constructor() { }

  ngOnInit() {
  }
}
