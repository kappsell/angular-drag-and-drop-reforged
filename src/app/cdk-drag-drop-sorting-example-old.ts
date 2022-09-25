// movies = [
//   { title: 'Episode I - The Phantom Menace', level: 1 },
//   { title: 'Episode II - Attack of the Clones', level: 2 },
//   { title: 'Episode III - Revenge of the Sith', level: 3 },
//   { title: 'Episode IV - A New Hope', level: 1 },
//   { title: 'Episode V - The Empire Strikes Back', level: 2 },
//   { title: 'Episode VI - Return of the Jedi', level: 2 },
//   { title: 'Episode VII - The Force Awakens', level: 3 },
//   { title: 'Episode VIII - The Last Jedi', level: 1 },
//   { title: 'Episode IX – The Rise of Skywalker', level: 1 },

//   { title: 'Episode I - The Phantom Menace', level: 1 },
//   { title: 'Episode II - Attack of the Clones', level: 2 },
//   { title: 'Episode III - Revenge of the Sith', level: 3 },
//   { title: 'Episode IV - A New Hope', level: 1 },
//   { title: 'Episode V - The Empire Strikes Back', level: 2 },
//   { title: 'Episode VI - Return of the Jedi', level: 2 },
//   { title: 'Episode VII - The Force Awakens', level: 3 },
//   { title: 'Episode VIII - The Last Jedi', level: 1 },
//   { title: 'Episode IX – The Rise of Skywalker', level: 1 },

//   { title: 'Episode I - The Phantom Menace', level: 1 },
//   { title: 'Episode II - Attack of the Clones', level: 2 },
//   { title: 'Episode III - Revenge of the Sith', level: 3 },
//   { title: 'Episode IV - A New Hope', level: 1 },
//   { title: 'Episode V - The Empire Strikes Back', level: 2 },
//   { title: 'Episode VI - Return of the Jedi', level: 2 },
//   { title: 'Episode VII - The Force Awakens', level: 3 },
//   { title: 'Episode VIII - The Last Jedi', level: 1 },
//   { title: 'Episode IX – The Rise of Skywalker', level: 1 },

//   { title: 'Episode I - The Phantom Menace', level: 1 },
//   { title: 'Episode II - Attack of the Clones', level: 2 },
//   { title: 'Episode III - Revenge of the Sith', level: 3 },
//   { title: 'Episode IV - A New Hope', level: 1 },
//   { title: 'Episode V - The Empire Strikes Back', level: 2 },
//   { title: 'Episode VI - Return of the Jedi', level: 2 },
//   { title: 'Episode VII - The Force Awakens', level: 3 },
//   { title: 'Episode VIII - The Last Jedi', level: 1 },
//   { title: 'Episode IX – The Rise of Skywalker', level: 1 },

//   { title: 'Episode I - The Phantom Menace', level: 1 },
//   { title: 'Episode II - Attack of the Clones', level: 2 },
//   { title: 'Episode III - Revenge of the Sith', level: 3 },
//   { title: 'Episode IV - A New Hope', level: 1 },
//   { title: 'Episode V - The Empire Strikes Back', level: 2 },
//   { title: 'Episode VI - Return of the Jedi', level: 2 },
//   { title: 'Episode VII - The Force Awakens', level: 3 },
//   { title: 'Episode VIII - The Last Jedi', level: 1 },
//   { title: 'Episode IX – The Rise of Skywalker', level: 1 },
// ];

import { Component, ViewChild } from '@angular/core';
import {
  CdkDragDrop,
  CdkDragMove,
  CdkDragStart,
  CdkDragRelease,
  CdkDragEnd,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop sorting
 */
@Component({
  selector: 'cdk-drag-drop-sorting-example',
  templateUrl: 'cdk-drag-drop-sorting-example.html',
  styleUrls: ['cdk-drag-drop-sorting-example.css'],
})
export class CdkDragDropSortingExample {
  @ViewChild('navList', { static: true }) navList: CdkDropList;
  moviesRaw = [
    {
      id: 1,
      title: 'Episode I - The Phantom Menace',
      subPages: [
        {
          id: 5,
          title: 'Episode II - Attack of the Clones',
          subPages: [{ id: 8, title: 'Episode III - Revenge of the Sith' }],
        },
      ],
    },
    {
      id: 2,
      title: 'Episode IV - A New Hope',
      subPages: [
        { id: 11, title: 'Episode V - The Empire Strikes Back' },
        {
          id: 12,
          title: 'Episode VI - Return of the Jedi',
          subPages: [{ id: 14, title: 'Episode VII - The Force Awakens' }],
        },
      ],
    },
    { id: 3, title: 'Episode VIII - The Last Jedi' },
    { id: 4, title: 'Episode IX – The Rise of Skywalker' },

    {
      id: 21,
      title: 'Episode I - The Phantom Menace',
      subPages: [
        {
          id: 25,
          title: 'Episode II - Attack of the Clones',
          subPages: [{ id: 28, title: 'Episode III - Revenge of the Sith' }],
        },
      ],
    },
    {
      id: 22,
      title: 'Episode IV - A New Hope',
      subPages: [
        { id: 211, title: 'Episode V - The Empire Strikes Back' },
        {
          id: 212,
          title: 'Episode VI - Return of the Jedi',
          subPages: [{ id: 214, title: 'Episode VII - The Force Awakens' }],
        },
      ],
    },
    { id: 23, title: 'Episode VIII - The Last Jedi' },
    { id: 24, title: 'Episode IX – The Rise of Skywalker' },

    {
      id: 31,
      title: 'Episode I - The Phantom Menace',
      subPages: [
        {
          id: 35,
          title: 'Episode II - Attack of the Clones',
          subPages: [{ id: 38, title: 'Episode III - Revenge of the Sith' }],
        },
      ],
    },
    {
      id: 32,
      title: 'Episode IV - A New Hope',
      subPages: [
        { id: 311, title: 'Episode V - The Empire Strikes Back' },
        {
          id: 312,
          title: 'Episode VI - Return of the Jedi',
          subPages: [{ id: 314, title: 'Episode VII - The Force Awakens' }],
        },
      ],
    },
    { id: 33, title: 'Episode VIII - The Last Jedi' },
    { id: 34, title: 'Episode IX – The Rise of Skywalker' },
  ];

  movies: any = [];

  /** Potrzebna metoda do transportu childow.
   * 1. sprawdz czy sa dzieciaki
   * 2. wrzuc je do dragowanego <li> jako subliste
   * 3. on drop wyrzuc je z sublisty i umiesc pod dragowanym elementem
   * 4. zaktualizuj indeksy
   */

  // potrzebny check w przypadku gdy wrzucamy item z childami na level 3

  placeholderDepth = 1;

  constructor() {
    this.__convertToOneDimensionalArray();
  }
  /**
   * Przydalby sie tutaj debounce, cdkDragMoved jest odpalany po kazdym pikselu
   */
  cdkDragMoved(event: CdkDragMove<any>) {
    //console.log(event);
    const distanceFromLeft =
      event.pointerPosition.x -
      event.source.dropContainer.element.nativeElement.offsetLeft;
    switch (true) {
      case distanceFromLeft > 200:
        this.placeholderDepth = 3;
        break;
      case distanceFromLeft > 100 && distanceFromLeft <= 200:
        this.placeholderDepth = 2;
        break;
      default:
        this.placeholderDepth = 1;
    }
  }
  cdkDragStarted(event: CdkDragStart) {
    console.log(
      'Dodaj dzieciaki do draggowanego itemu (wybierz wszystkie itemy znajdujace sie pod dragowanym itemem o levelu mniejszym niz current level)',
      event.source
    );
  }
  cdkDragReleased(event: CdkDragRelease) {
    console.log(
      'Wyrzuc dzieciaki z dragowanego itemu, umiesc pod nim i zaktualizuj indeksy'
    );
  }
  cdkDropListDropped(event: CdkDragDrop<string[]>) {
    console.log(
      event.container.element.nativeElement.offsetLeft,
      event.dropPoint.x,
      event.item.element.nativeElement.offsetLeft,
      event.distance
    );
    const distanceFromLeft =
      event.dropPoint.x - event.container.element.nativeElement.offsetLeft;

    // potrzebne warunki do przesuwania w poziomie
    // np nie mozna z 1 do 3
    // np nie mozna z 2 do 1 jezeli pod spodem sa dzieciaki
    // itp

    switch (true) {
      case distanceFromLeft > 200:
        this.movies[event.previousIndex].level = 3;
        break;
      case distanceFromLeft > 100 && distanceFromLeft <= 200:
        this.movies[event.previousIndex].level = 2;
        break;
      default:
        this.movies[event.previousIndex].level = 1;
    }

    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    // potrzebna metoda do konwersji jednowymiarowej tablicy obiektow na wejsciowa tablice asocjacyjna
    console.log('przed', this.moviesRaw);
    this.__convertToMultiDimensionalArray();
    console.log('po', this.moviesRaw);
  }

  __convertToOneDimensionalArray() {
    this.moviesRaw.forEach((value) => {
      this.movies.push({ id: value.id, title: value.title, level: 1 });
      const childrenMenuItems = value.subPages;
      if (childrenMenuItems && childrenMenuItems.length > 0) {
        childrenMenuItems.forEach((cValue) => {
          this.movies.push({ id: cValue.id, title: cValue.title, level: 2 });
          const grandchildrenMenuItems = cValue.subPages;
          if (grandchildrenMenuItems && grandchildrenMenuItems.length > 0) {
            grandchildrenMenuItems.forEach((gcValue) => {
              this.movies.push({
                id: gcValue.id,
                title: gcValue.title,
                level: 3,
              });
            });
          }
        });
      }
    });
  }
  __convertToMultiDimensionalArray() {
    this.moviesRaw = [];
    /**
     * Tablica level 1 jest otwarta dopoki nie wystapi ostatni index lub item, ktory ma rowniez level 1
     * Tablica level 2 jest otwarta dopoki nie wystapi ostatni index lub item, ktory ma level 2 lub 1
     * Item level 3 jest od razu pushowany do otwartej tablicy level 2
     */
    let navItemLvl1: any, navItemLvl2: any, navItemLvl3: any;
    const lastIndex = this.movies.length - 1;
    this.movies.forEach((value: any, index: number) => {
      switch (value.level) {
        case 1: // new level 1 comes in
          // first - close subnav of current level 1 item if there is any
          if (navItemLvl2) {
            navItemLvl1.subPages.push(navItemLvl2);
          }
          // then close current level 1 item
          if (navItemLvl1) {
            this.moviesRaw.push(navItemLvl1);
          }
          // set nev level 1 item, reset level 2
          navItemLvl1 = { ...value, subPages: [] };
          navItemLvl2 = null;
          break;
        case 2: // new level 2 comes in
          // close current level 2 item if there is any
          if (navItemLvl2) {
            navItemLvl1.subPages.push(navItemLvl2);
          }
          // set new level 2 item
          navItemLvl2 = { ...value, subPages: [] };
          break;
        case 3: // ostatni poziom zagniezdzenia
          navItemLvl3 = value;
          navItemLvl2.subPages.push(navItemLvl3);
          break;
      }
    });
    // check if there is any level 1 or level 2 nav still open and close it
    navItemLvl2 && navItemLvl1?.push(navItemLvl2);
    navItemLvl1 && this.moviesRaw.push(navItemLvl1);
  }

  tester() {
    console.log('dabus', this.navList.getSortedItems());
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
