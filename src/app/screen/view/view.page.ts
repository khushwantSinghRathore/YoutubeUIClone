import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  shorts = [
    {
      img: 'assets/Rectangle5.png',
      des: 'The Beauty of Existence - Heart Touching Nasheed',
      subd: '19,210,251 viewsJul • 1, 2016',
    },
    {
      img: 'assets/Rectangle6.png',
      des: 'The Beauty of Existence - Heart Touching Nasheed',
      subd: '19,210,251 viewsJul • 1, 2016',
    },
    {
      img: 'assets/Rectangle7.png',
      des: 'The Beauty of Existence - Heart Touching Nasheed',
      subd: '19,210,251 viewsJul • 1, 2016',
    },
    {
      img: 'assets/Rectangle8.png',
      des: 'The Beauty of Existence - Heart Touching Nasheed',
      subd: '19,210,251 viewsJul • 1, 2016',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
