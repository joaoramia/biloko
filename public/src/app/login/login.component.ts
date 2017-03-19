import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
      localStorage.removeItem('token');
  }

  login(){
      this.authService.login(this.email, this.password)
      .subscribe(res => {
          console.log(res);

          if (res.token) {
              localStorage.setItem('token', res.token);
              this.router.navigate(['/video-editor']);
          }
      })
  }

}
