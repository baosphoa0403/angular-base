import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.scss'],
})
export class OnewayComponent implements OnInit {
  name: string = 'Gia Bảo';
  fullName: string = 'Trần Phạm Gia Bảo';
  constructor() {}
  handleChangeName = (): void => {
    this.fullName = 'haha';
  };
  ngOnInit(): void {}
}
