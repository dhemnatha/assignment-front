import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { TreeViewService } from '../tree-view.service';
@Component({
  selector: 'app-tree-view-item',
  templateUrl: './tree-view-item.component.html',
  styleUrls: ['./tree-view-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeViewItemComponent implements OnInit {
  @ViewChildren('treeViewCheckbox') treeViewCheckbox: QueryList<ElementRef>;
  @ViewChildren('treeViewCheckboxAll')
  treeViewCheckboxAll: QueryList<ElementRef>;
  @Input()
  public nodes: any[] = [];
  @Input()
  public selectedNode: any = [];
  pNodes;
  sibleSelect = [];
  public selectedList: any[] = [];
  public removeSelectedList: any[] = [];
  constructor(private treeViewService: TreeViewService) {}

  ngOnInit(): void {
    this.pNodes = this.nodes.filter(
      (parentNodes) => parentNodes.parent_id === this.selectedNode.id
    );

    this.treeViewService.removeSelectedItem$.subscribe((value) => {
      if (Object.keys(value).length !== 0) {
        this.removeSelectedList = value;
      }
    });

    this.treeViewService.selectedItem$.subscribe((value) => {
      if (Object.keys(value).length !== 0) {
        this.selectedList = value;
      }
    });

    this.treeViewService.removeSelectedItem$.subscribe((value) => {
      if (Object.keys(value).length !== 0) {
        value.selected = false;
        this.selectNode(null, value.id, 'remove');
      }
    });
    this.treeViewService.removeAllSelectedItem$.subscribe((value) => {
      this.selectNode(null, null, 'removeAll');
    });
  }

  public selectNode(
    event = null,
    id: any = '',
    selectionMode: string = 'one'
  ): void {
    let targetElement = event != null ? event.target : [];
    if (selectionMode === 'all') {
      this.treeViewCheckbox.forEach((checkbox) => {
        checkbox.nativeElement.click();
      });
      return;
    }

    if (selectionMode == 'removeAll') {
      // Remove Single
      if (this.treeViewCheckbox != undefined) {
        this.treeViewCheckbox.forEach((checkbox) => {
          checkbox.nativeElement.checked = false;
        });
      }
      if (this.treeViewCheckboxAll != undefined) {
        this.treeViewCheckboxAll.forEach((checkbox) => {
          checkbox.nativeElement.checked = false;
        });
      }
    }

    // Single item selection
    this.nodes.forEach((child) => {
      if (child.id !== id) {
        return;
      }

      if (
        targetElement.checked != undefined &&
        targetElement.checked === false
      ) {
        child.selected = false;
        this.unSelectItem(child);
        return;
      }

      if (
        targetElement.checked != undefined &&
        targetElement.checked === true
      ) {
        child.selected = true;
        this.treeViewService.setItems(Array(child));
        return;
      }

      if (selectionMode == 'remove' && child.id == id) {
        // Remove Single
        if (this.treeViewCheckbox != undefined) {
          this.treeViewCheckbox.forEach((checkbox) => {
            if (checkbox.nativeElement.id == id) {
              child.selected = false;
              checkbox.nativeElement.click();
              this.unSelectItem(child);
            }
          });
        }
        if (this.treeViewCheckboxAll != undefined) {
          this.treeViewCheckboxAll.forEach((checkboxAll) => {
            if (checkboxAll.nativeElement.id == 0) {
              checkboxAll.nativeElement.checked = false;
              this.unSelectItem(child);
            }
          });
        }
      }
    });
  }

  private unSelectItem(node) {
    this.selectedList.find((object) => {
      if (object == node) {
        const index = this.selectedList.indexOf(object);

        if (index > -1) {
          this.selectedList.splice(index, 1);
        }
      }
    });
  }
}
