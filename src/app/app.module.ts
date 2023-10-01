import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatTreeModule } from '@angular/material/tree';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { ProtectionComponent } from './protection/protection.component';
import { FooterComponent } from './footer/footer.component';
import { UsageGuidelinesComponent } from './usage-guidelines/usage-guidelines.component';
import { TaxonomyComponent } from './taxonomy/taxonomy.component';
import { ProliferationComponent } from './proliferation/proliferation.component';
import { PopulaceComponent } from './populace/populace.component';
import { PreservationComponent } from './preservation/preservation.component';
import { ProgressionComponent } from './progression/progression.component';
import { NotableNimbatsComponent } from './notable-nimbats/notable-nimbats.component';
import { ColonyChroniclesComponent } from './colony-chronicles/colony-chronicles.component';
import { CaughtUpInYourWheelingDealingComponent } from './colony-chronicles/caught-up-in-your-wheeling-dealing/caught-up-in-your-wheeling-dealing.component';
import { MagicalCapabilitiesComponent } from './magical-capabilities/magical-capabilities.component';
import { VisitantRunesComponent } from './visitant-runes/visitant-runes.component';
import { HistoryComponent } from './history/history.component';
import { CuriousBattesComponent } from './curious-battes/curious-battes.component';
import { CuriousBattesOocComponent } from './curious-battes/curious-battes-ooc/curious-battes-ooc.component';
import { VisitantsComponent } from './visitants/visitants.component';
import { ColonyCultureComponent } from './colony-culture/colony-culture.component';
import { LifeInTheColonyComponent } from './life-in-the-colony/life-in-the-colony.component';
import { DebounceMouseDirective } from './directives/debounce-mouse.directive';
import { ThouHaveYetToBecomeMeComponent } from './colony-chronicles/thou-have-yet-to-become-me/thou-have-yet-to-become-me.component';
import { ChooseYourPathComponent } from './colony-chronicles/choose-your-path/choose-your-path.component';
import { YearRoundComponent } from './colony-chronicles/year-round/year-round.component';
import { StreamComponent } from './stream/stream.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BannerComponent,
    HomeComponent,
    ProtectionComponent,
    FooterComponent,
    UsageGuidelinesComponent,
    TaxonomyComponent,
    ProliferationComponent,
    PopulaceComponent,
    PreservationComponent,
    ProgressionComponent,
    NotableNimbatsComponent,
    ColonyChroniclesComponent,
    CaughtUpInYourWheelingDealingComponent,
    ThouHaveYetToBecomeMeComponent,
    StreamComponent,
    ChooseYourPathComponent,
    MagicalCapabilitiesComponent,
    VisitantRunesComponent,
    HistoryComponent,
    CuriousBattesComponent,
    CuriousBattesOocComponent,
    VisitantsComponent,
    ColonyCultureComponent,
    LifeInTheColonyComponent,
    DebounceMouseDirective,
    YearRoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatTreeModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
