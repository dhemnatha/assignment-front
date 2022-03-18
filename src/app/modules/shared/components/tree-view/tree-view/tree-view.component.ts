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
  private selectedCategories: any[] = [];
  constructor() {
    this.setSelectedCategories(0);
  }

  ngOnInit(): void {
    if (undefined !== this.selectedNode) {

      this.toggle = this.getSelectedCategories().includes(this.selectedNode.id);

    }
  }

  public setSelectedCategories(id: number) {
    this.selectedCategories.push(id);
  }

  public getSelectedCategories() {
    return this.selectedCategories;
  }
}
