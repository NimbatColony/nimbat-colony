import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PopulaceComponent } from './populace/populace.component';
import { PreservationComponent } from './preservation/preservation.component';
import { ProgressionComponent } from './progression/progression.component';
import { ProliferationComponent } from './proliferation/proliferation.component';
import { ProtectionComponent } from './protection/protection.component';
import { TaxonomyComponent } from './taxonomy/taxonomy.component';
import { UsageGuidelinesComponent } from './usage-guidelines/usage-guidelines.component';

export const routes: Routes = [
  { path: 'taxonomy', component: TaxonomyComponent },
  { path: 'protection', component: ProtectionComponent },
  { path: 'populace', component: PopulaceComponent },
  { path: 'preservation', component: PreservationComponent },
  { path: 'proliferation', component: ProliferationComponent },
  { path: 'progression', component: ProgressionComponent },
  { path: 'usage-guidelines', component: UsageGuidelinesComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
