import {Component} from '@angular/core';
import {Global} from '../../helper/global';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})

export class PageNotFoundComponent {
    constructor(public global: Global) {}


}


