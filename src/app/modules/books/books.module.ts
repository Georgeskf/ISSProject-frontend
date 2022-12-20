import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllMaterialModule } from 'src/app/_shared/allmaterials.module';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';


@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    AllMaterialModule
  ]
})
export class BooksModule { }
