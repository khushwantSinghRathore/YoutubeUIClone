import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
})
export class DownloadPage implements OnInit {
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

  toView() {
    this.router.navigateByUrl('/view');
  }
}
