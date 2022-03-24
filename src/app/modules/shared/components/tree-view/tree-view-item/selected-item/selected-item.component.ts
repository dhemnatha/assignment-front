import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TreeViewService } from '../../tree-view.service';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.scss'],
})
export class SelectedItemComponent implements OnInit {
  @Input()
  public selection: any[] = [];
  @Output() removeAllSelected = new EventEmitter<any>();
  public selectedList;

  showMe:boolean = true;
  constructor(private treeViewService: TreeViewService) {}

  ngOnInit(): void {
    this.treeViewService.selectedItem$.subscribe((value) => {
      if (Object.keys(value).length !== 0) {
        this.selectedList = value;
      }
    });
  }

  removeSelectItem(item) {
    this.selectedList.find((object) => {
      if (object == item) {
        const index = this.selectedList.indexOf(object);
        if (index > -1) {
          this.selectedList.splice(index, 1);
        }
      }
    });
    this.treeViewService.setRemoveItems(item);
  }

  removeAll(item) {
    this.selectedList = [];
    this.treeViewService.setRemoveAllItems('removeAll');
    // this.showMe=false;
  }
}
