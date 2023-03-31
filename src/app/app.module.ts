import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StartComponent } from './start/start.component';
import { FooterComponent } from './footer/footer.component';
import { BMICalculatorComponent } from './bmi-calculator/bmi-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartComponent,
    FooterComponent,
    BMICalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
