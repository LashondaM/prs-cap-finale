import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestReviewListComponent } from './request/request-review-list/request-review-list.component';

import { RequestReviewItemComponent } from './request/request-review-item/request-review-item.component';

import { RequestlineListComponent } from './requestline/requestline-list/requestline-list.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';

import { E404Component } from './e404/e404.component';

import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';


const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},

  {path: "users/list", component: UserListComponent},
  {path: "users/detail/:id", component: UserDetailComponent},
  {path: "users/create", component: UserCreateComponent},
  {path: "users/edit/:id", component: UserEditComponent},
  {path: "users/login", component: UserLoginComponent},

  {path: "vendors/list", component: VendorListComponent},
  {path: "vendors/detail/:id", component: VendorDetailComponent},
  {path: "vendors/create", component: VendorCreateComponent},
  {path: "vendors/edit/:id", component: VendorEditComponent},

  {path: "products/list", component: ProductListComponent},
  {path: "products/detail/:id", component: ProductDetailComponent},
  {path: "products/create", component: ProductCreateComponent},
  {path: "products/edit/:id", component: ProductEditComponent},

  {path: "requests/list", component: RequestListComponent},
  {path: "requests/detail/:id", component: RequestDetailComponent},
  {path: "requests/create", component: RequestCreateComponent},
  {path: "requests/edit/:id", component: RequestEditComponent},
  {path: "requests/lines/:id", component: RequestLinesComponent},

  {path: "requests/reviews", component: RequestReviewListComponent},

  {path: "requests/review/:id", component: RequestReviewItemComponent},
  

  {path: "requestlines/list", component: RequestlineListComponent},
  {path: "requestlines/create/:id", component: RequestlineCreateComponent},
  {path: "requestlines/edit/:id", component: RequestlineEditComponent},

  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},

  {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
