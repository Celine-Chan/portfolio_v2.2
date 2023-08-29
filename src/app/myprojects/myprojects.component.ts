import { Component, OnInit } from '@angular/core';
import { Modal, Ripple, initTE} from 'tw-elements';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css']
})
export class MyprojectsComponent implements OnInit  {
  selector: boolean = false;
  selectorDropdown() {
    this.selector = !this.selector;
  }
  selected: string = "Collections";
  isToggle: number = 1;
  constructor() {}

  ngOnInit(): void {
    initTE({ Modal, Ripple });
  }
}


