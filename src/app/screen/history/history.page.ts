import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
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

  vids = [
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
  constructor(private router: Router) {}

  ngOnInit() {}

  back() {
    this.router.navigateByUrl('/tabs/library');
  }

  toShorts() {
    this.router.navigateByUrl('/tabs/shorts');
  }

  toView() {
    this.router.navigateByUrl('/view');
  }
}
