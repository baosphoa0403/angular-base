import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent implements OnInit {
  list: any = [
    { name: 'bảo', age: 20 },
    { name: 'sang', age: 20 },
    { name: 'tu', age: 1 },
    { name: 'quang', age: 2 },
    { name: 'huy', age: 23 },
    { name: 'hỉ', age: 24 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
