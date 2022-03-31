import { Component, Input, OnInit } from '@angular/core';
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
  public selectedList: any[] = [];
  selectedProduct: any;
  constructor() {
  }
  ngOnInit(): void {}

}
