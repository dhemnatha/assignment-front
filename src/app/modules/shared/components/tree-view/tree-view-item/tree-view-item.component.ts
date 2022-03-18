import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-view-item',
  templateUrl: './tree-view-item.component.html',
  styleUrls: ['./tree-view-item.component.scss'],
})
export class TreeViewItemComponent implements OnInit {
  @Input()
  public nodes: any[] = [];
  @Input()
  public selectedNode: any = [];
  selectedCategories: any[] = [];
  pNodes;

  constructor() {}

  ngOnInit(): void {
    this.pNodes = this.nodes.filter(
      (parentNodes) => parentNodes.parent_id === this.selectedNode.id
    );
  }

  public ngDoCheck(): void {}

  public selectNode(event, id: any, selectMode: string = 'single'): void {
    if (selectMode === 'all') {
      this.selectNodes(id, event.target.checked);
      return;
    }

    this.nodes.forEach((child) => {
      if (child.id !== id) {
        return;
      }

      if (event.target.checked === false) {
        child.selected = false;
        child.show = false;
        return;
      }

      child.selected = true;
      child.show = true;
    });
  }

  public selectNodes(parentId, isChecked): void {
    const selectedNodes = this.nodes.filter(
      (child) => child.parent_id === parentId
    );
    selectedNodes.forEach((child) => {
      child.selected = isChecked;

      if (child.selected === false) {

        const index = selectedNodes.indexOf(child.id);
        console.log(selectedNodes);
        console.log(child.id);
        console.log(index);
selectedNodes.splice(index, 1);
        if (index > -1) {

        }
      }

      this.selectNodes(child.id, child.selected);
      this.pNodes = this.nodes.filter(
        (parentNodes) => parentNodes.parent_id === this.selectedNode.id
      );
    });
  }
}
