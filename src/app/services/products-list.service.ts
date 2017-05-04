import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from '../classes/product';

@Injectable()
export class ProductListService {
    private offeredProductListUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/offered_products';
    private productUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/products';
    constructor(private http: Http) { }

    getProducts() {
       // console.log(this.http.get(this.productListUrl));
        return this.http.get(this.offeredProductListUrl).map((response: Response) => response.json());
    }
    
    
    getProductById(id) {
        const url = `${this.offeredProductListUrl}/${id}`;
        //console.log(this.http.get(url));
        return this.http.get(url).map((response: Response) => response.json());
    }

    getByCategories( categories: string[] ){
         var url = `${this.productUrl}/products_by_categories/?`;
         for(var category of categories)
            url += 'categories[]=' + category + "&";
        url = url.slice(0, -1);
        //console.log(this.http.get(url));
        return this.http.get(url).map((response: Response) => response.json());
    }

    getByCategory( category: string ){
         var url = `${this.productUrl}/products_by_categories/?`;
        url += 'categories[]=' + category;
        //console.log(this.http.get(url));
        return this.http.get(url).map((response: Response) => response.json());
    }



}
