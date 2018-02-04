import { Component } from '@angular/core';
import { AfterViewInit, OnInit } from "@angular/core";
//import * as $ from 'jquery';
declare var jQuery: any; // It is imported globally on angular-cli.json, so we just need to declare it.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'app';
  selectedvalue;

  ngOnInit() {

  }

  ngAfterViewInit() {
    jQuery('.ui.dropdown').dropdown({
      onChange: function (value, text, $selectedItem) {
        this.selectedvalue = value;
        console.log(this.selectedvalue);
      }
    });
  }
}
