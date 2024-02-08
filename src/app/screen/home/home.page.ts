import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  options = [
    { name: 'All' },
    { name: 'Mixes' },
    { name: 'Music' },
    { name: 'Graphics' },
  ];

  shorts = [
    {
      des: 'DIY Toys | Satisfying And Relaxing | DIY Tiktok Compilation..',
      img: 'assets/Rectangle1.png',
      view: '24M views',
    },
    {
      des: 'DIY Toys | Satisfying And Relaxing | DIY Tiktok Compilation..',
      img: 'assets/Rectangle2.png',
      view: '24M views',
    },
    {
      des: 'DIY Toys | Satisfying And Relaxing | DIY Tiktok Compilation..',
      img: 'assets/Rectangle3.png',
      view: '24M views',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
