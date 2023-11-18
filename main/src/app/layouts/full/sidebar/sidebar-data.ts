import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
 
  
  
  {
    navCap: 'Université',
  },
  {
    displayName: 'Ajouter Université',
    iconName: 'mood-smile',
    route: '/ui-components/adduniversite',
  },
  {
    displayName: 'Afficher Université',
    iconName: 'aperture',
    route: '/ui-components/universite',
  },

  {
    navCap: 'Foyer',
  },
  {
    displayName: 'Afficher Foyer',
    iconName: 'aperture',
    route: '/ui-components/foyer',
  },
  {
    displayName: 'ajouter un Foyer',
    iconName: 'tooltip',
    route: '/ui-components/foyer-form',
  },

  {
    navCap: 'chambre',
  },

  {
    displayName: 'Afficher Chambre',
    iconName: 'aperture',
    route: '/ui-components/chambre',
  },
];
