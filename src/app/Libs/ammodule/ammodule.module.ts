import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  exports: [
    MatDatepickerModule,
    MatFormFieldModule, 
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class AMModuleModule { }
