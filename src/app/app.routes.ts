import { Routes } from '@angular/router';
import { PageNotFound } from './page-not-found/page-not-found';
import { MenuListComponent } from './menu/menu-list/menu-list';
import { menuTable } from './Menupage/menu-table/menu-table';
import { MenuForm } from './Menupage/menu-form/menu-form';

export const routes: Routes = [
   
    { path: '', redirectTo: '/menu-table', pathMatch: 'full' },
    { path: 'menu-list',component: MenuListComponent },
    { path: 'menu-table', component: menuTable },
    { path: 'menu-form', component: MenuForm }, 
    { path: 'menu-form/:id', component: MenuForm }, 
    { path: '**', component: PageNotFound }

];
