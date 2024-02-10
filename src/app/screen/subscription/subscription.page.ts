import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {
  options = [
    { name: 'All' },
    { name: 'Today' },
    { name: 'Yeasterday' },
    { name: 'This mounth' },
    { name: 'continue watching' },
  ];

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
