import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { UniversiteDataComponent } from './universite-data/universite-data.component';
import { UniversiteAjoutComponent } from './universite-ajout/universite-ajout.component';
import { UniversiteUpdateComponent } from './universite-update/universite-update.component';
import { FoyerComponent } from './foyer/foyer.component';
import { FoyerFormComponent } from './foyer-form/foyer-form.component';
import { FoyerUpdateFormComponent } from './foyer-update-form/foyer-update-form.component';
import { ChambreComponent } from './chambre/chambre.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'badge',
        component: AppBadgeComponent,
      },
      {
        path: 'chips',
        component: AppChipsComponent,
      },
      {
        path: 'lists',
        component: AppListsComponent,
      },
      {
        path: 'menu',
        component: AppMenuComponent,
      },
      {
        path: 'tooltips',
        component: AppTooltipsComponent,
      },
      {
        path: 'universite',
        component: UniversiteDataComponent,
      },
      {
        path: 'adduniversite',
        component: UniversiteAjoutComponent,
      },
      {
        path: 'update/:idUniversite',
        component: UniversiteUpdateComponent,
      },
      {
        path: 'foyer',
        component: FoyerComponent,
      },
      {
        path: 'foyer-form',
        component: FoyerFormComponent,
      },
      {
        path: 'foyer-update-form/:id',
        component: FoyerUpdateFormComponent,
      },
      {
        path: 'chambre',
        component: ChambreComponent,
      },
      
      

    ],
  },
];
