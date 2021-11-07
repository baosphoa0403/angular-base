import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent implements OnInit {
  conditionSwicth = 'red';
  constructor() {}

  ngOnInit(): void {}
  handleChange = (event: any) => {
    // console.log(event.target.value);
    this.conditionSwicth = event.target.value;
  };
}