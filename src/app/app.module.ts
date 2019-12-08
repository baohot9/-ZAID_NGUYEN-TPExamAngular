import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PubliqueComponent } from './mission-list/mission-list.component';
import { DialogOverviewDialogMission } from './mission-list/mission-list.component';
import { ShowMissionComponent } from './mission-show/mission-show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CompteListComponent } from './compte-list/compte-list.component';
import { DialogOverviewDialog } from './compte-list/compte-list.component';

import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    PubliqueComponent,
    ShowMissionComponent,
    LoginComponent,
    CompteListComponent,
    DialogOverviewDialog,
    DialogOverviewDialogMission,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  exports: [DialogOverviewDialog, DialogOverviewDialogMission],
  entryComponents: [DialogOverviewDialog, DialogOverviewDialogMission],
})
export class AppModule { }
