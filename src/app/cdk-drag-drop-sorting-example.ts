// comment added from vscode.dev
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

@Component({
  selector: 'cdk-drag-drop-sorting-example',
  templateUrl: 'cdk-drag-drop-sorting-example.html',
  styleUrls: ['cdk-drag-drop-sorting-example.css'],
})
export class CdkDragDropSortingExample {
  @ViewChild('navList', { static: true }) navList: CdkDropList;

  navBarData = [
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

  placeholderLevel: number = 0;

  navBarItems: any = [];

  /**
   * Tablica asocjacyjna itemow ktore zostaly schowane
   * - index to id itemu, ktorego sub itemy sa schowane
   */
  collapsedNavBarItems: any = {};

  /**
   * Tablica asocjacyjna dla przenoszonych itemow
   */
  draggedNavBarItems: any = {};

  constructor() {
    // Zamien dane na tablice jednowymiarowa
    this.__transformToNavBarItems();
  }

  // zamienia dane na liste drag & drop
  private __transformToNavBarItems = () => {
    this.navBarData.forEach((value) => {
      this.navBarItems.push({
        id: value.id,
        title: value.title,
        level: 1,
        subPagesAmount: value.subPages?.length || 0,
        allowedDropZones: this.__getAllowedDropZones(value),
        status: 'visible',
      });
      const childrenMenuItems = value.subPages;
      if (childrenMenuItems && childrenMenuItems.length > 0) {
        childrenMenuItems.forEach((cValue) => {
          this.navBarItems.push({
            id: cValue.id,
            title: cValue.title,
            level: 2,
            subPagesAmount: cValue.subPages?.length || 0,
            allowedDropZones: this.__getAllowedDropZones(cValue),
            status: 'visible',
          });
          const grandchildrenMenuItems = cValue.subPages;
          if (grandchildrenMenuItems && grandchildrenMenuItems.length > 0) {
            grandchildrenMenuItems.forEach((gcValue) => {
              this.navBarItems.push({
                id: gcValue.id,
                title: gcValue.title,
                level: 3,
                subPagesAmount: 0,
                allowedDropZones: this.__getAllowedDropZones(gcValue),
                status: 'visible',
              });
            });
          }
        });
      }
    });
  };

  // zamienia liste drag & drop na dane
  // todo uwzglednij collapsed
  private __transformToNavBarData = () => {
    this.navBarData = [];
    /**
     * Tablica level 1 jest otwarta dopoki nie wystapi ostatni index lub item, ktory ma rowniez level 1
     * Tablica level 2 jest otwarta dopoki nie wystapi ostatni index lub item, ktory ma level 2 lub 1
     * Item level 3 jest od razu pushowany do otwartej tablicy level 2
     */
    let navItemLvl1: any, navItemLvl2: any, navItemLvl3: any;
    const lastIndex = this.navBarItems.length - 1;
    this.navBarItems.forEach((value: any, index: number) => {
      switch (value.level) {
        case 1: // new level 1 comes in
          // first - close subnav of current level 1 item if there is any
          if (navItemLvl2) {
            navItemLvl1.subPages.push(navItemLvl2);
          }
          // then close current level 1 item
          if (navItemLvl1) {
            this.navBarData.push(navItemLvl1);
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
    navItemLvl1 && this.navBarData.push(navItemLvl1);
  };

  // zwraca liste bezposrednich sub itemow danego itemu
  private __getDirectSubItems = (index: number) => {
    const children = this.__getAllSubItems(index);
    return children.length
      ? children.filter(
          (element: any) => element.level === this.navBarItems[index].level + 1
        )
      : [];
  };

  // zwraca liste wszystkich sub itemow danego itemu
  private __getAllSubItems = (index: number) => {
    const selectedNavBarItem = this.navBarItems[index];
    // nie ma nastepnego itemu, lub nastepny item nie jest dzieckiem - out
    if (
      !this.navBarItems[index + 1] ||
      this.navBarItems[index + 1].level <= selectedNavBarItem.level
    ) {
      return [];
    } else {
      const startIndex = index + 1;
      const endIndex = this.navBarItems.findIndex((element: any, i: number) => {
        return element.level <= selectedNavBarItem.level && i > index;
      });
      return endIndex !== -1
        ? this.navBarItems.slice(startIndex, endIndex)
        : this.navBarItems.slice(startIndex);
    }
  };

  // zwraca dozwolone strefy upuszczenia dla itemu, przydatne np przy dragowaniu zcollapsowanych itemow
  private __getAllowedDropZones = (item: any) => {
    let result = [1, 2, 3];
    if (item.subPages?.length) {
      result = result.filter((element) => element !== 3);
      if (
        item.subPages.findIndex((element: any) => element.subPages?.length) > -1
      ) {
        result = result.filter((element) => element !== 2);
      }
    }
    return result;
  };

  // wstawia item w podanym indeksie
  public addNavBarItem = (index: number, insertBefore: boolean = false) => {
    return this.navBarItems.splice(
      insertBefore ? index : index + 1 + this.__getAllSubItems(index).length,
      0,
      {
        id: this.navBarItems.length,
        title: 'New Item ID: ' + this.navBarItems.length,
        subPages: [],
        allowedDropZones: [1, 2, 3],
        level: this.navBarItems[index].level,
      }
    );
  };

  // przenies item i jego dzieci programowo w inne miejsce
  public moveItemTo = (indexFrom: number, indexTo: number) => {
    // jezeli sa dzieci, to zabierz je ze soba!
  };
  // przenies dziec
  public moveSubItemsTo = (
    index: number,
    indexFrom: number,
    indexTo: number
  ) => {};

  // chowa wszystkie dzieciaki
  public collapseItems = (
    index: number,
    container: any = this.collapsedNavBarItems
  ) => {
    console.log('hej');
    const parent = this.navBarItems[index];
    const children = this.__getAllSubItems(index);
    children.forEach((element: any) => {
      element.status = 'collapsed';
    });
    console.log(children);
    // this.navBarItems.splice(index + 1, children.length);
    // container[parent.id] = children;
  };

  // chowa wszystkie dzieciaki rekurencyjnie (dzieciaki dzieciakow tez)
  public collapseAllItems = (index: number) => {
    const ids = this.navBarItems.filter((item: any) => item.level === 1);
  };

  // rozwia wszystkie dzieciaki
  public expandItems = (
    index: number,
    container: any = this.collapsedNavBarItems
  ) => {
    // const parent = this.navBarItems[index];
    // if (container[parent.id]) {
    //   this.navBarItems.splice(index + 1, 0, ...container[parent.id]);
    //   delete container[parent.id];
    // }
    const parent = this.navBarItems[index];
    const children = this.__getAllSubItems(index);
    children.forEach((element: any) => {
      element.status = 'visible';
    });
  };

  // rozwija wszystkie dzieciaki rekurencyjnie
  public expandAllItems = () => {};

  //cdkDropListDropped
  public cdkDropListDropped = (event: CdkDragDrop<any>) => {
    console.log('CdkDropList', event);
    moveItemInArray(this.navBarItems, event.previousIndex, event.currentIndex);
    this.expandItems(event.currentIndex, this.draggedNavBarItems);
    console.log(this.draggedNavBarItems);
  };
  //cdkDragStarted
  public cdkDragStarted = (event: CdkDragStart) => {
    console.log('CdkDragStart', event);
    const index = event.source.data;
    this.collapseItems(index, this.draggedNavBarItems);
    console.log(this.draggedNavBarItems);
  };
  //cdkDragReleased
  public cdkDragReleased = (event: CdkDragRelease) => {
    console.log('CdkDragRelease', event);
  };
  //cdkDragMoved
  public cdkDragMoved = (event: CdkDragMove) => {
    //console.log('CdkDragMove', event);
  };

  /**
   * DEBUG
   */
  public templateRefTest = () => {
    console.log(this.navList.getSortedItems());
  };
  public getAllSubItems = (index: number) => {
    console.log(this.__getAllSubItems(index));
  };
  public getDirectSubItems = (index: number) => {
    console.log(this.__getDirectSubItems(index));
  };
}
