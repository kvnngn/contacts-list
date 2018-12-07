import {Routes} from '@angular/router';
import {NotFoundComponent} from './shared/404/404.component';
import {ErrorComponent} from './shared/error/error.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AdminGuard} from './providers/admin-guard.service';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'admin/contacts',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path: 'error',
        component: ErrorComponent
    },
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '404'}
];
