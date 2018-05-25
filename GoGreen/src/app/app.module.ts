import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { CompNameComponent } from './comp-name/comp-name.component';
import { SavetreesComponent } from './savetrees/savetrees.component';
import { PlantComponent } from './savetrees/plant/plant.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { AdddetailsComponent } from './adddetails/adddetails.component';
import { DisplaydetailsComponent } from './displaydetails/displaydetails.component';

import { NgDraggableWidgetModule } from 'ngx-draggable-widget';
import { GamecontrollerComponent } from './gamecontroller/gamecontroller.component';
import { TreesdetailComponent } from './savetrees/treesdetail/treesdetail.component';
import { ShoppingeditComponent } from './shoppingcart/shoppingedit/shoppingedit.component';
import { HighligthcolorDirective } from './highligthcolor.directive';
import { DropDownDirective } from './shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    CompNameComponent,
    SavetreesComponent,
    PlantComponent,
    HeaderComponent,
    ShoppingcartComponent,
    AdddetailsComponent,
    DisplaydetailsComponent,
    GamecontrollerComponent,
    TreesdetailComponent,
   ShoppingeditComponent,
    HighligthcolorDirective,
    DropDownDirective
      ],
  imports: [
    BrowserModule,
    FormsModule,
    NgDraggableWidgetModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
