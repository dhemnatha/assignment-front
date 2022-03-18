import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../../models/category';
import { CategoryService } from './../../services/category.service';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  isShowDivIf = false;

  @Input()
  public categories: Category[] = [];
  @Input()
  public child1: Category[] = [];
  @Input()
  public rootCategories: Category[] = [];
  @Input()
  public filter: any = [];
  @Input()
  public toggleSub: boolean = false;

  // public categories: Category[] = [];
  // public filter: Category[] = [];
  public categories$: Observable<Category[]>;

  public superParent: Category;
  public parentCategories: Category[] = [];
  // public rootCategories: Category[] = [];
  public childCategories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    // this.getCategories();
    // console.log(this.categories ? this.categories : []);
    // this.parentCategories(this.categories);
    // this.categoryService.getAll().subscribe({
    //   next: (data) => {
    //     this.categories.push(data.results);
    //     console.log(this.categories);
    //     // let p = this.categories.filter(
    //     //   (category) => function chk(){
    //     //     return category.parentId===0;
    //     //   }
    //     // );
    //     // console.log(p);
    //   },
    //   error: (err) => {
    //     this.categories = JSON.parse(err.error).message;
    //   },
    // });
  }
  getCategories() {
    const nodes = {
      top: [],
    };
    this.categoryService.getAll().subscribe((cate) => {
      this.categories = cate;
      this.setSuperParent();
      this.rootCategories = this.categories.filter(
        (category: Category) => category.parent_id === 0
      );

      // this.categories.map((category) => console.log(category.parent_id));

      this.childCategories = this.categories.filter(
        (category: Category) => category.category_id === category.parent_id
      );

      console.log(this.rootCategories);
    });
    // this.categories$ = this.categoryService.getAll();

    //  this.categoryService.getAll().subscribe((categories) => {
    //    if (categories) {
    //      this.categories = categories['results'];
    //      //  this.parentCategories = this.getParentCategories(this.categories);
    //      // console.log(p);
    //      //  console.log(this.categories);
    //    }
    //  });
    //   console.log(this.categories ? this.categories : []);
  }
  getParentCategories(categories: Category[]) {
    return (this.parentCategories = categories.filter(
      (category: Category) => category.parent_id === 0
    ));
  }

  public ngDoCheck(): void {
    this.filter = this.categories.filter((category) => category.selected);
    console.log(this.filter);
  }

  private setSuperParent(): void {
    this.superParent = {
      id: 0,
      category_id: 0,
      name: '',
      count: 0,
      show: true,
    };
  }
}
