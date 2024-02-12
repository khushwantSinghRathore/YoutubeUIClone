import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    {
      des: 'DIY Toys | Satisfying And Relaxing | DIY Tiktok Compilation..',
      img: 'assets/Rectangle4.png',
      view: '24M views',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  openShort() {
    this.router.navigateByUrl('/tabs/shorts');
  }

  toView() {
    this.router.navigateByUrl('/view');
  }
}
