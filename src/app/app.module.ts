import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StartComponent } from './start/start.component';
import { FooterComponent } from './footer/footer.component';
import { BMICalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { BMIResultComponent } from './bmi-result/bmi-result.component';
import { CreatePlanComponent } from './create-plan/create-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartComponent,
    FooterComponent,
    BMICalculatorComponent,
    BMIResultComponent,
    CreatePlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
