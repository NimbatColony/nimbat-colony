import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProtectionComponent } from './protection/protection.component';
import { UsageGuidelinesComponent } from './usage-guidelines/usage-guidelines.component';

export const routes: Routes = [
  { path: 'protection', component: ProtectionComponent },
  { path: 'usage-guidelines', component: UsageGuidelinesComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
