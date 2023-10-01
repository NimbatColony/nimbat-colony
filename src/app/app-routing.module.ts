import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CaughtUpInYourWheelingDealingComponent } from './colony-chronicles/caught-up-in-your-wheeling-dealing/caught-up-in-your-wheeling-dealing.component';
import { ChooseYourPathComponent } from './colony-chronicles/choose-your-path/choose-your-path.component';
import { ColonyChroniclesComponent } from './colony-chronicles/colony-chronicles.component';
import { ThouHaveYetToBecomeMeComponent } from './colony-chronicles/thou-have-yet-to-become-me/thou-have-yet-to-become-me.component';
import { YearRoundComponent } from './colony-chronicles/year-round/year-round.component';
import { ColonyCultureComponent } from './colony-culture/colony-culture.component';
import { CuriousBattesOocComponent } from './curious-battes/curious-battes-ooc/curious-battes-ooc.component';
import { CuriousBattesComponent } from './curious-battes/curious-battes.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LifeInTheColonyComponent } from './life-in-the-colony/life-in-the-colony.component';
import { MagicalCapabilitiesComponent } from './magical-capabilities/magical-capabilities.component';
import { NotableNimbatsComponent } from './notable-nimbats/notable-nimbats.component';
import { PopulaceComponent } from './populace/populace.component';
import { PreservationComponent } from './preservation/preservation.component';
import { ProgressionComponent } from './progression/progression.component';
import { ProliferationComponent } from './proliferation/proliferation.component';
import { ProtectionComponent } from './protection/protection.component';
import { TaxonomyComponent } from './taxonomy/taxonomy.component';
import { UsageGuidelinesComponent } from './usage-guidelines/usage-guidelines.component';
import { VisitantRunesComponent } from './visitant-runes/visitant-runes.component';
import { VisitantsComponent } from './visitants/visitants.component';
import { StreamComponent } from './stream/stream.component';

export const routes: Routes = [
  { path: 'taxonomy', component: TaxonomyComponent },
  { path: 'stream', component: StreamComponent },
  { path: 'protection', component: ProtectionComponent },
  { path: 'populace', component: PopulaceComponent },
  { path: 'colony-chronicles', component: ColonyChroniclesComponent },
  { path: 'caught-up-in-your-wheeling-dealing', component: CaughtUpInYourWheelingDealingComponent },
  { path: 'thou-have-yet-to-become-me', component: ThouHaveYetToBecomeMeComponent },
  { path: 'year-round', component: YearRoundComponent },
  { path: 'choose-your-path', component: ChooseYourPathComponent },
  { path: 'visitant-runes', component: VisitantRunesComponent },
  { path: 'magical-capabilities', component: MagicalCapabilitiesComponent },
  { path: 'preservation', component: PreservationComponent },
  { path: 'history-of-the-colony', component: HistoryComponent },
  { path: 'proliferation', component: ProliferationComponent },
  { path: 'visitants', component: VisitantsComponent },
  { path: 'life-in-the-colony', component: LifeInTheColonyComponent },
  { path: 'colony-culture', component: ColonyCultureComponent },
  { path: 'curious-battes', component: CuriousBattesComponent },
  { path: 'curious-battes-ooc', component: CuriousBattesOocComponent },
  { path: 'progression', component: ProgressionComponent },
  { path: 'notable-nimbats', component: NotableNimbatsComponent },
  { path: 'usage-guidelines', component: UsageGuidelinesComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
