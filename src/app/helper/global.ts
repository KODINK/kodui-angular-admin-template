import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Injectable()
export class Global {

  constructor(private route: ActivatedRoute) {}

  pinNavigation = false;
  titlePage: string = this.route.snapshot.data.title;
}

