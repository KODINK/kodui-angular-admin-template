import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class AppService {
    authEmiter: EventEmitter<boolean> = new EventEmitter();
}
