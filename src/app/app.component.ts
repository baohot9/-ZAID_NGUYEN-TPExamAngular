import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data: string;

  ngOnInit() {
    let tmp = localStorage.getItem('token');
    if (tmp === 'haskdjheakjfaejkfbjaf') {
      this.data = "Admin";
    }
    if (tmp === 'queryiqeryiereruqer') {
      this.data = "Chef de Projet";
    }
    if (tmp === 'ewrwerwerwrwerwfdfgf') {
      this.data = "Salarié";
    }
    this.data = "Utilisateur non connecté";
  }

  constructor(private route: ActivatedRoute, private router: Router, ) {
  }
  title = 'TPExam';
  missions_go() {
    this.router.navigate(['/']);
  }
  comptes_go() {
    this.router.navigate(['/comptes']);
  }
  login_go() {
    this.router.navigate(['/login']);
  }
}
