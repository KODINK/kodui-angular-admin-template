import {Component} from '@angular/core';
import {Global} from '../../helper/global';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
    constructor(public global: Global) {}
}


