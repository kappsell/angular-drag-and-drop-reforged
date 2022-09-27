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

  navBarItems: any = [];

  /**
   * Tablica asocjacyjna itemow ktore zostaly schowane
   * - index to id itemu, ktorego sub itemy sa schowane
   */
  collapsednavBarItems = {};

  constructor() {
    // Zamien dane na tablice jednowymiarowa
    this.__transformToNavBarItems();
  }

  // zamienia dane na liste drag & drop
  private __transformToNavBarItems = () => {};

  // zamienia liste drag & drop na dane
  private __transformToNavBarData = () => {};

  // zwraca liste bezposrednich sub itemow danego itemu
  private __getDirectSubItems = () => {};

  // zwraca liste wszystkich sub itemow danego itemu
  private __getAllSubItems = () => {};

  // chowa wszystkie dzieciaki
  public collapseItems = () => {};

  // chowa wszystkie dzieciaki rekurencyjnie (dzieciaki dzieciakow tez)
  public collapseAllItems = () => {};

  // rozwia wszystkie dzieciaki
  public expandItems = () => {};

  // rozwija wszystkie dzieciaki rekurencyjnie
  public expandAllItems = () => {};
  // ??
}
