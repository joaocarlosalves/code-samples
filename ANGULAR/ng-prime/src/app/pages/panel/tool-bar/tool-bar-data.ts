import { MenuItem } from 'primeng/api';

export const items: MenuItem[] = [
  {
      label: 'Update',
      icon: 'pi pi-refresh'
  },
  {
      label: 'Delete',
      icon: 'pi pi-times'
  },
  {
      label: 'Angular',
      icon: 'pi pi-external-link',
      url: 'http://angular.io'
  },
  {
      label: 'Router',
      icon: 'pi pi-upload',
      routerLink: '/fileupload'
  }
];
