import {Component, OnInit} from '@angular/core';
import {Global} from '../../helper/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(public global: Global) {}

    ngOnInit() {

    }


}
