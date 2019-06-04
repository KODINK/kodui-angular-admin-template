import {Component, ElementRef} from '@angular/core';
import {CoolLocalStorage} from 'angular2-cool-storage';
import {AuthService} from '../../services/auth.service';
import {AppService} from '../../services/app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    localStorage: CoolLocalStorage;
    isAuthPage: boolean;

    constructor(localStorage: CoolLocalStorage, private element: ElementRef, private appService: AppService, private authService: AuthService) {
        this.localStorage = localStorage;
        console.log(this.authService.isLogin());

        if (this.authService.isLogin()) {
            this.isAuthPage = true;
        }

        this.appService.authEmiter.subscribe(res => {
            console.log(res);
            this.isAuthPage = res;
        });
    }

}
