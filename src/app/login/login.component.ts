import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any = [];
  errorMsg: boolean = false;
  show: boolean = false;
  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    console.log(this.form.value)

    this.auth.login(this.form.value).subscribe(response => {
      this.router.navigate(['usuarios']);
      this.data = response
      localStorage.setItem('ACCESS_TOKEN', this.data.token)
      localStorage.setItem('DATA_USER', JSON.stringify(this.data.user))
      this.errorMsg = false;
    }, async err => {
      console.log(err)
      this.errorMsg = true;
    })
  }

  password(){
    if (this.show) {
      this.show = false
    }else{
      this.show = true
    }
  }

}
