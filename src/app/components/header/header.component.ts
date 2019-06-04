import {Component} from '@angular/core';
import {Global} from '../../helper/global';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    title;

    constructor(public global: Global, private authService: AuthService) {
        this.title = this.global.titlePage;
    }

    toggleHeader() {
        this.global.pinNavigation = !this.global.pinNavigation;
    }

    logout() {
        this.authService.logout();
    }
}


