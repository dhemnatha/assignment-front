import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  HostBinding,
  SimpleChanges,
} from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
interface Tree {
  root: TreeNode;
  id: number;
}

interface TreeNode {
  label: string;
  id: number;
  check?: boolean;
  children: TreeNode[];
}
@Component({
  selector: 'app-category-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent<T> implements OnInit {
  isShowDivIf = false;
  public data: Tree;
  public selectedTreeNode: TreeNode | null;
  @Input()
  public data1: Tree;
  @Input()
  stringify: (item: T) => string = (item: T) => String(item);
  @Input()
  public categories: Category[] = [];
  @Input()
  public child1: Category[] = [];
  @Input()
  public rootCategories: Category[] = [];
  @Input()
  public filter:any=[];
  @Input()
  public toggleSub: boolean = false;

  constructor(private categoryService: CategoryService) {
    console.log(this.categories ? this.categories : []);
    // this.data = {
    //   id: 1,
    //   root: {
    //     label: 'root',
    //     id: 1,
    //     children: [
    //       {
    //         label: 'level-1',
    //         id: 1,
    //         children: [
    //           {
    //             label: 'level-2',
    //             id: 1,
    //             children: [
    //               {
    //                 label: 'level-3',
    //                 id: 1,
    //                 children: [
    //                   {
    //                     label: 'level-3-a',
    //                     id: 1,
    //                     children: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 label: 'level-3',
    //                 id: 1,
    //                 children: [
    //                   {
    //                     label: 'level-3-a',
    //                     id: 1,
    //                     children: [],
    //                   },
    //                 ],
    //               },
    //             ],
    //           },

    //           {
    //             label: 'level-2',
    //             id: 1,
    //             children: [
    //               {
    //                 label: 'level-3',
    //                 id: 1,
    //                 children: [
    //                   {
    //                     label: 'level-3-a',
    //                     id: 1,
    //                     children: [],
    //                   },
    //                   {
    //                     label: 'level-3-a',
    //                     id: 1,
    //                     children: [],
    //                   },
    //                 ],
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //       {
    //         label: 'level-1',
    //         id: 1,
    //         children: [
    //           {
    //             label: 'third',
    //             id: 1,
    //             children: [],
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // };
    this.data = {
      id: 100,
      root: {
        label: 'root',
        id: 0,
        children: [
          {
            label: 'Dames',
            id: 14100,
            children: [
              {
                label: 'Kleding',
                id: 14096,
                children: [
                  {
                    label: 'Badmode',
                    id: 14098,
                    children: [
                      {
                        label: 'Overige Badmode',
                        id: 17091,
                        children: [],
                      },
                    ],
                  },
                ],
              },

              {
                label: 'level-2',
                id: 21,
                children: [
                  {
                    label: 'level-3',
                    id: 31,
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            label: 'Dames',
            id: 14100,
            children: [
              {
                label: 'Kleding',
                id: 14096,
                children: [
                  {
                    label: 'Badmode',
                    id: 14098,
                    children: [
                      {
                        label: 'Overige Badmode',
                        id: 17091,
                        children: [],
                      },
                    ],
                  },
                ],
              },

              {
                label: 'level-2',
                id: 21,
                children: [
                  {
                    label: 'level-3',
                    id: 31,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    };
    this.selectedTreeNode = this.data['root']['child'];
  }

  ngOnInit(): void {}
  public ngDoCheck(): void {
    this.categories = this.categories;
  }

  public selectNode(node: TreeNode, value: boolean): void {
    console.log(node);
    console.log(value);

    this.check(node, value);
  }

  check(node: any, value: boolean) {
    node.check = value;
    node.children.forEach((x) => {
      this.check(x, value);
    });
  }
  ngOnChanges(data: SimpleChanges) {
    console.log(data);
    if (data) {
      // changes['categories'].filter(
      //   (category) => category.parent === this.filterCategory.categoryId
      // );
    }
  }
  clickEventHandler(nodes, event) {
    console.log(nodes);
    console.log(event.target.id);

    this.filter = this.categories.filter(
      (category) => category.parent_id == event.target.id
    );
    console.log(this.filter);
    if (event.target.id) {
      this.isShowDivIf = !this.isShowDivIf;
    }
  }

  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }
}
