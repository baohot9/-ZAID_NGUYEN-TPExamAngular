import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { comptes } from '../comptes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logout: boolean = false;

  name: string;
  password: string;
  tmp: any = comptes;
  tmp_object: any = null;

  constructor(private router: Router, ) { }

  login(name, pw) {
    
    this.tmp.forEach(element => {
      if (element.nom == name && element.pw == pw) {
        this.tmp_object = element;
      }
    });

    
    if (this.tmp_object != null) {
      this.logout = true; 
      if(this.tmp_object.ecran == "Admin"){
        localStorage.setItem("token", "haskdjheakjfaejkfbjaf");
        console.log(this.tmp_object.ecran);
      } else if(this.tmp_object.ecran == "Chef de Projet"){
        localStorage.setItem("token", "queryiqeryiereruqer");
      } else if(this.tmp_object.ecran == "Salarié"){
        localStorage.setItem("token", "ewrwerwerwrwerwfdfgf");
      }
      
      this.router.navigate(['/']);

    } else {
      alert("Unknown username or wrong password");
      localStorage.setItem("token", null);
    }
    
  }

  ngOnInit() {
    // tam
    localStorage.setItem("token", null);
  }

}


