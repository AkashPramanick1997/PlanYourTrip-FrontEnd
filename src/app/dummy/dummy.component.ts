import { Component, OnInit } from '@angular/core';
declare var window : any;

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  formModal : any;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(){
    this.formModal.show();
  }

  doSomething(){
    this.formModal.hide();
  }
}
