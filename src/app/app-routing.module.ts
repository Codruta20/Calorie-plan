import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BMICalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { StartComponent } from './start/start.component';
import { BMIResultComponent } from './bmi-result/bmi-result.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'BMI-calculator', component: BMICalculatorComponent },
  { path: 'BMI-result', component: BMIResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
