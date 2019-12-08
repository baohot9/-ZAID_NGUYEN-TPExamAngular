import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowMissionComponent } from './mission-show/mission-show.component';
import { PubliqueComponent } from "./mission-list/mission-list.component";
import { CompteListComponent } from "./compte-list/compte-list.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";

const routes: Routes = [
  { path: '',  component: PubliqueComponent },
  { path: 'mission/:id',  component: ShowMissionComponent },
  { path: 'missions',  component: PubliqueComponent },
  { path: 'comptes',  component: CompteListComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'logout',  component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
