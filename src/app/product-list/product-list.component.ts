import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Product } from '../classes/product';
import { ProductListService } from '../services/products-list.service';
import { FilterOfferedProductsNamePipe } from '../pipes/filter-offered-products-name.pipe';
import { ActivatedRoute , Router } from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']

})
export class ProductListComponent implements OnInit {
   dataItems = [];
   priceRange = [0,50000];
   categoryList = ["cat7","cat9","cat10"];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productListService: ProductListService) { }

  ngOnInit() {
    this.dataItems = this.route.snapshot.data.dataItems.data;
  }
  getProducts() {

    this.productListService.getProducts().subscribe(response => {
      response.data.forEach(element => {
        this.dataItems.push(element);
      });
    });

  }
  

  getUrl(photoUrl: string) {
    return `url(${photoUrl})`;
  }
}
