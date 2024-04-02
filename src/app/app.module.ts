import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { ProtectionComponent } from './protection/protection.component';
import { UsageGuidelinesComponent } from './usage-guidelines/usage-guidelines.component';
import { TaxonomyComponent } from './taxonomy/taxonomy.component';
import { ProliferationComponent } from './proliferation/proliferation.component';
import { PopulaceComponent } from './populace/populace.component';
import { PreservationComponent } from './preservation/preservation.component';
import { ProgressionComponent } from './progression/progression.component';
import { ColonyChroniclesComponent } from './colony-chronicles/colony-chronicles.component';
import { CaughtUpInYourWheelingDealingComponent } from './colony-chronicles/caught-up-in-your-wheeling-dealing/caught-up-in-your-wheeling-dealing.component';
import { MagicalCapabilitiesComponent } from './magical-capabilities/magical-capabilities.component';
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
import { DiscordComponent } from './discord/discord.component';
import { ProductionComponent } from './production/production.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    ProtectionComponent,
    UsageGuidelinesComponent,
    TaxonomyComponent,
    ProliferationComponent,
    PopulaceComponent,
    PreservationComponent,
    ProgressionComponent,
    ColonyChroniclesComponent,
    CaughtUpInYourWheelingDealingComponent,
    ThouHaveYetToBecomeMeComponent,
    StreamComponent,
    ChooseYourPathComponent,
    DiscordComponent,
    MagicalCapabilitiesComponent,
    HistoryComponent,
    ProductionComponent,
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
    MatToolbarModule,
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
