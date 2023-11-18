import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { UiComponentsRoutes } from './ui-components.routing';

// ui components
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { MatNativeDateModule } from '@angular/material/core';
import { UniversiteDataComponent } from './universite-data/universite-data.component';
import { UniversiteAjoutComponent } from './universite-ajout/universite-ajout.component';
import { UniversiteUpdateComponent } from './universite-update/universite-update.component';
import { FoyerComponent } from './foyer/foyer.component';
import { FoyerFormComponent } from './foyer-form/foyer-form.component';
import { FoyerUpdateFormComponent } from './foyer-update-form/foyer-update-form.component';
import { ChambreComponent } from './chambre/chambre.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UiComponentsRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
  ],
  declarations: [
    AppBadgeComponent,
    AppChipsComponent,
    AppListsComponent,
    AppMenuComponent,
    AppTooltipsComponent,
    UniversiteDataComponent,
    UniversiteAjoutComponent,
    UniversiteUpdateComponent,
    FoyerComponent,
    FoyerFormComponent,
    FoyerUpdateFormComponent,
    ChambreComponent,
  ],
})
export class UicomponentsModule {}
