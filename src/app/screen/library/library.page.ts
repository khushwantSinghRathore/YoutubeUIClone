import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  vids = [
    {
      img: 'assets/Rectangle5.png',
      des: 'Heart Touching Nasheed #Shorts',
      subd: 'An Naffe',
    },
    {
      img: 'assets/Rectangle6.png',
      des: 'Heart Touching Nasheed #Shorts',
      subd: 'An Naffe',
    },
    {
      img: 'assets/Rectangle7.png',
      des: 'Heart Touching Nasheed #Shorts',
      subd: 'An Naffe',
    },
    {
      img: 'assets/Rectangle8.png',
      des: 'Heart Touching Nasheed #Shorts',
      subd: 'An Naffe',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  toHistory() {
    this.router.navigateByUrl('/history');
  }

  toDownload() {
    this.router.navigateByUrl('/download');
  }

  toView() {
    this.router.navigateByUrl('/view');
  }
}
