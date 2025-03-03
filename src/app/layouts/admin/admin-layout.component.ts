import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

import {NavbarComponent} from '../../admin/admin-navbar/navbar.component';

declare let $: any;

@Component({
    selector: 'app-layout',
    templateUrl: './admin-layout.component.html',
})

export class AdminLayoutComponent implements OnInit {
    location: Location;

    @ViewChild('sidebar') sidebar;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor(private router: Router, location: Location) {
        this.location = location;
    }

    ngOnInit() {
    }
}
