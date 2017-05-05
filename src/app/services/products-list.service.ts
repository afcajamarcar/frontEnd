import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Angular2TokenService } from 'angular2-token';
import { Product } from '../classes/product';

@Injectable()
export class ProductListService {
    private offeredProductListUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/retailers';
    private offeredProductUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/offered_products';
    private productUrl = 'http://infinite-river-92156.herokuapp.com/api/v1/products';
    constructor(private http: Http) {
    }

    getProducts(retailer_id: number, q: string) {
        const url = this.offeredProductListUrl + `/${retailer_id}/offered_products_by_param_retailer_match?q=${q}`;
        return this.http.get(url).map((response: Response) => response.json());
    }
    getProductById(id) {
        const url = `${this.offeredProductUrl}/${id}`;
        return this.http.get(url).map((response: Response) => response.json());
    }

    getByCategories( categories: string[] ){
         var url = `${this.productUrl}/products_by_categories/?`;
         for(var category of categories)
            url += 'categories[]=' + category + "&";
        url = url.slice(0, -1);
        return this.http.get(url).map((response: Response) => response.json());
    }

    getByCategory( category: string ){
         var url = `${this.productUrl}/products_by_categories/?`;
        url += 'categories[]=' + category;
        //console.log(this.http.get(url));
        return this.http.get(url).map((response: Response) => response.json());
    }

    getCategories(){
        var url = `http://infinite-river-92156.herokuapp.com/api/v1/products/categories`;
        return this.http.get(url).map((response: Response) => response.json());

    }

}
