import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit() {}
}
