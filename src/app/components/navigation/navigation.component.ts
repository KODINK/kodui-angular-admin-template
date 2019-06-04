import {Component} from '@angular/core';
import {Global} from '../../helper/global';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {
    constructor(public global: Global) {}

    toggleHeader() {
        this.global.pinNavigation = !this.global.pinNavigation
    }
}


