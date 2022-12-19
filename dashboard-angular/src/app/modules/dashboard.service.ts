import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}
  bigChart() {
    return [
      {
        name: 'Year 1990',
        data: [631, 727, 3202, 721, 26],
      },
      {
        name: 'Year 2000',
        data: [814, 841, 3714, 726, 31],
      },
      {
        name: 'Year 2010',
        data: [1044, 944, 4170, 735, 40],
      },
      {
        name: 'Year 2018',
        data: [1276, 1007, 4561, 746, 42],
      },
    ];
  }

  cards() {
    return [71, 78, 39, 66, 521];
  }

  pieChart() {
    return [
      {
        name: 'Brands',
        colorByPoint: true,
        data: [
          {
            name: 'Chrome',
            y: 70.67,
            sliced: true,
            selected: true,
          },
          {
            name: 'Edge',
            y: 14.77,
          },
          {
            name: 'Firefox',
            y: 4.86,
          },
          {
            name: 'Safari',
            y: 2.63,
          },
          {
            name: 'Internet Explorer',
            y: 1.53,
          },
          {
            name: 'Opera',
            y: 1.4,
          },
          {
            name: 'Sogou Explorer',
            y: 0.84,
          },
          {
            name: 'QQ',
            y: 0.51,
          },
          {
            name: 'Other',
            y: 2.6,
          },
        ],
      },
    ];
  }

  dataTable() {
    return [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
  }

  posts() {
    return [
      { id: '1', title: 'Post 1', content: 'This is the content of post 1' },
      { id: '2', title: 'Post 2', content: 'This is the content of post 2' },
      { id: '3', title: 'Post 3', content: 'This is the content of post 3' },
      { id: '4', title: 'Post 4', content: 'This is the content of post 4' },
      { id: '5', title: 'Post 5', content: 'This is the content of post 5' },
    ];
  }

  post(id: string) {
    return this.posts().find((post) => post.id === id);
  }
}
