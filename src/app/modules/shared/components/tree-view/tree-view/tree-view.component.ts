import { Component, Input, OnInit } from '@angular/core';
import { TreeViewService } from '../tree-view.service';
@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
})
export class TreeViewComponent implements OnInit {
  @Input()
  public nodes: any[] = [];
  @Input()
  public selectedNode: any;
  @Input() public toggle: boolean;
  private selectedCategories: any[] = [];
  public selectedList: any[] = [];
  selectedProduct: any;
  constructor() {
    // this.setSelectedCategories(0);
  }
  ngOnInit(): void {}

}
