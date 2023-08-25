import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css']
})
export class MyprojectsComponent {
  selector: boolean = false;
  selectorDropdown() {
    this.selector = !this.selector;
  }
  selected: string = "Collections";
  isToggle: number = 1;
  constructor() {}

  ngOnInit(): void {}
}
