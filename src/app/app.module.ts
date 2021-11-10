import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AMModuleModule } from './Libs/ammodule/ammodule.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AsncValidatorComponent } from './asnc-validator/asnc-validator.component';
import { DataAPIService } from './data-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    LoginComponent,
    SearchBoxComponent,
    AsncValidatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AMModuleModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
