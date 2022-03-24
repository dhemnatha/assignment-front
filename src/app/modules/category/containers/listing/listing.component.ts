import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Node } from '../../../shared/interfaces/node';
import { Category } from '../../models/category';
import { CategoryService } from './../../services/category.service';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  public categories: Category[] = [];
  public rootCategory: Category;
  public node: Node[] = [];
  public filter: any = [];

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
}
