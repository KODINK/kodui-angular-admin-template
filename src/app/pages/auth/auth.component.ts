import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {CoolLocalStorage} from 'angular2-cool-storage';
import {AppService} from '../../services/app.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
    loginForm: FormGroup;
    errorMessage: string;
    successMessage: string;
    error;
    localStorage: CoolLocalStorage;


    constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, localStorage: CoolLocalStorage, private appService: AppService) {
        this.localStorage = localStorage;
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get user() {
        return this.loginForm.controls;
    }

    clear() {
        this.errorMessage = null;
        this.successMessage = null;
    }

    login() {
        this.authService.login(this.user.username.value, this.user.password.value);
        // .subscribe(
        //     error => this.error = error
        // )
        if (this.authService.isLogin) {
            this.router.navigate(['']);
        }

    }
}


