import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { ItemResolver } from './_resolvers/item.resolver';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [ItemResolver],
})
export class NavbarModule { }
