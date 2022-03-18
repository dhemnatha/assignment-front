import { Component, OnInit } from '@angular/core';
import { Category } from '../category/models/category';
import { CategoryService } from '../category/services/category.service';

interface Node {
  id: any;
  parent_id: any;
  label: string;
  count: number;
  selected?: boolean;
  show?: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public categories: Category[] = [];
  public rootCategory: Category;
  public node: Node[] = [];
  public filter: any = [];
  public filteredCategoryData: any = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAll().subscribe((categories) => {
      categories.map((categories) => {
        this.node.push({
          id: categories.category_id,
          parent_id: categories.parent_id,
          label: categories.name,
          count: categories.count,
          selected: false,
        });
        //  console.log(this.node);
      });
      // console.log(this.node);
      this.rootCategory = {
        id: 0,
        parent_id: 0,
        name: '',
        count: 0,
        show: true,
      };
    });
  }

  public ngDoCheck(): void {
    this.filteredCategoryData = this.node.filter(
      (category) => category
    );
    // console.log(this.filteredCategoryData);

  }
}
