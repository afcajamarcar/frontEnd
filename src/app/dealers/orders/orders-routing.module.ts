import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { OrdersComponent} from './orders.component';
import { OrderListComponent} from './order-list/order-list.component';
import {MakeOrderComponent} from './make-order/make-order.component';
//resolver
import {OrderListResolver} from './resolvers/order-list.resolver';
const ordersRoutes = [
    {
        path: '',
        component: OrdersComponent,
       children :[
          {
            path : '',
            component : OrderListComponent,
            resolve :{
              order : OrderListResolver
            }
          },
          {
            path :'makeOrder',
            component :MakeOrderComponent,
            
          }
        ]

    }
]



@NgModule({
  imports: [

    RouterModule.forChild(ordersRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: [],
  providers:[]
})
export class OrdersRoutingModule { }
