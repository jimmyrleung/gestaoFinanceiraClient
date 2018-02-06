import { Component } from '@angular/core';
import { AfterViewInit, OnInit } from "@angular/core";
//import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  ngOnInit() {

  }

  ngAfterViewInit() {
    // jQuery('.ui.dropdown').dropdown({
    //   onChange: function (value, text, $selectedItem) {
    //     console.log(value);
    //     if (value === 3) {
    //       this.noDataMessage = '';
    //       this.listagem = this.extratoIntelity;
    //     }
    //     else {
    //       this.listagem = [];
    //       this.noDataMessage = "Parece que este plano financeiro ainda não possui nenhum registro."
    //     }
    //   }
    // });
  }
}
