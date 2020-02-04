import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { TdfFormsComponent } from './tdf-forms/tdf-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    DataBindingComponent,
    DirectivesComponent,
    TdfFormsComponent,
    ReactiveFormsComponent,
    HttpDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
