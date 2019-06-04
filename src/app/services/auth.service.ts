import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CoolLocalStorage} from "angular2-cool-storage";
import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {Urls} from "../helper/urls";
import {AppService} from "./app.service";
import {Router} from "@angular/router";


@Injectable()
export class AuthService {

    redirectUrl: string;
    localStorage: CoolLocalStorage;

    constructor(private http: HttpClient, private router: Router, localStorage: CoolLocalStorage, private appService: AppService) {
        this.localStorage = localStorage;
    }

    isLogin() {
        return !!this.localStorage.getItem('token')
    }

    login(username: string, password: string): Observable<any> {

        // if (username === 'admin' && password === '12345') {
            this.localStorage.setItem('token', 'vremenniyToken');
            this.appService.authEmiter.emit(true);
        // }

        return this.http.get<any>(Urls.login + username + '/' + password)
            // .pipe(
                // map(user => {
                    // if (user && user.accessToken) {
                    //     this.localStorage.setItem('token', user.accessToken);
                    // }
                    // return user;
                // }),
                // catchError(this.handleError)
            // );
    }

    logout(): void {
        this.localStorage.removeItem('token')
        this.appService.authEmiter.emit(false);
        this.router.navigate(['auth'])

    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };

}
