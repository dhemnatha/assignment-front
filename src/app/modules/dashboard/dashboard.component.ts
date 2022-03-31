import { Component, OnInit } from '@angular/core';
import { Node } from '../shared/interfaces/node';
import { Category } from '../category/models/category';
import { CategoryService } from '../category/services/category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public categories: Category[] = [];
  public rootCategory: Category;
  public nodes: Node[] = [];
  public filter: any = [];
  public filteredCategoryData: any = [];
  public selectedList;

  constructor(
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAll().subscribe((categories) => {
      categories.map((categories) => {
        this.nodes.push({
          id: categories.id,
          parent_id: categories.parent_id,
          label: categories.name,
          count: categories.count,
          selected: false,
        });
      });
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
    this.filteredCategoryData = this.nodes.filter((item) => item.selected);
  }
}
