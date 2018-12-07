import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AppRoutes} from './app.routing';
import {AlertService} from './providers/alert.service';
import {NotFoundComponent} from './shared/404/404.component';
import {ErrorComponent} from './shared/error/error.component';
import {SidebarModule} from './admin/sidebar/sidebar.module';
import {FooterModule} from './shared/footer/footer.module';
import {NavbarModule} from './shared/navbar/navbar.module';


import {ApiService} from './providers';
import {ContactsService} from './providers';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthnavbarModule} from './shared/navbar/authnavbar.module';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AdminGuard} from './providers/admin-guard.service';
import {AdminNavbarModule} from "./admin/admin-navbar/navbar.module";

@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent,
        NotFoundComponent,
        AuthLayoutComponent,
        AdminLayoutComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(AppRoutes, {useHash: true}),
        SidebarModule,
        NavbarModule,
        FooterModule,
        ReactiveFormsModule,
        AuthnavbarModule,
        AdminNavbarModule
    ],
    providers: [
        ApiService,
        ContactsService,
        HttpClient,
        AdminGuard,
        AlertService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
