import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserComponent } from './user/user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

import { E404Component } from './e404/e404.component';

import { VendorComponent } from './vendor/vendor/vendor.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { RequestComponent } from './request/request/request.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestReviewListComponent } from './request/request-review-list/request-review-list.component';

import { RequestReviewItemComponent } from './request/request-review-item/request-review-item.component';

import { ProductComponent } from './product/product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { RequestlineComponent } from './requestline/requestline/requestline.component';
import { RequestlineListComponent } from './requestline/requestline-list/requestline-list.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';

import { MenuComponent } from './menu/menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';

import { DisplayBooleanPipe } from './display-boolean.pipe';

import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { AppInitService } from './app-init.service';

export const startupServiceFactory = (appinit: AppInitService) => {
  return () => appinit.getSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    E404Component,
    VendorComponent,
    VendorListComponent,
    RequestComponent,
    RequestListComponent,
    ProductComponent,
    ProductListComponent,
    RequestlineComponent,
    RequestlineListComponent,
    MenuComponent,
    MenuItemComponent,
    UserDetailComponent,
    VendorDetailComponent,
    ProductDetailComponent,
    RequestDetailComponent,
    DisplayBooleanPipe,
    UserCreateComponent,
    VendorCreateComponent,
    ProductCreateComponent,
    RequestCreateComponent,
    UserEditComponent,
    VendorEditComponent,
    RequestlineEditComponent,
    RequestlineCreateComponent,
    RequestEditComponent,
    ProductEditComponent,
    UserLoginComponent,
    HomeComponent,
    AboutComponent,
    RequestLinesComponent,
    RequestReviewItemComponent,
    RequestReviewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [
    AppInitService, {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
