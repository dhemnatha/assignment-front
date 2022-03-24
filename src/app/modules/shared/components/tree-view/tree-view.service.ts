import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TreeViewService {
  private selectedItems$ = new BehaviorSubject<any>({});
  selectedItem$ = this.selectedItems$.asObservable();
  itemList = [];

  private removeSelectedItems$ = new BehaviorSubject<any>({});
  removeSelectedItem$ = this.removeSelectedItems$.asObservable();
  private removeAllSelectedItems$ = new BehaviorSubject<any>({});
  removeAllSelectedItem$ = this.removeAllSelectedItems$.asObservable();
  removeSelectedItemsList = [];

  constructor() {}

  setItems(selectedItems: any) {
    selectedItems.forEach((element) => {
      this.itemList.push(element);
    });

    this.selectedItems$.next(this.itemList);
  }

  setRemoveItems(data: any) {
    this.removeSelectedItems$.next(data);
  }
  setRemoveAllItems(data: any) {
    console.log(data);

    this.removeAllSelectedItems$.next(data);
  }
}
