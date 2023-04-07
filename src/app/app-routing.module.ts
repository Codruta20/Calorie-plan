import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BMICalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { StartComponent } from './start/start.component';
import { BMIResultComponent } from './bmi-result/bmi-result.component';
import { CreatePlanComponent } from './create-plan/create-plan.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'BMI-calculator', component: BMICalculatorComponent },
  { path: 'BMI-result', component: BMIResultComponent },
  { path: 'create-plan', component: CreatePlanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
