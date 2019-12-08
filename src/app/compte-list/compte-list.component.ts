import { Component, OnInit, Inject } from '@angular/core';
import { comptes } from '../comptes';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
}

@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',
  styleUrls: ['./compte-list.component.css']
})
export class CompteListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nom', 'pw', 'ecran', 'actions'];
  dataSource: any = comptes;
  tmp: any = comptes;
  tmp_object: any = comptes;

  id: string;
  nom: string;
  pw: string;
  ecran: string;
  flag_edit: boolean;

  login: boolean = false;

  constructor(private router: Router, public dialog: MatDialog
  ) { }

  ngOnInit() {
    let tmp = localStorage.getItem('token');
    if (tmp === 'haskdjheakjfaejkfbjaf') {
      this.login = true;
    }
  }

  openDialogEdit(a): void {
    this.tmp.forEach(element => {
      if (element.id == a) {
        this.tmp_object = element;
      }
    });

    const dialogRef = this.dialog.open(DialogOverviewDialog, {
      width: '400px',
      data: { id: this.tmp_object.id, nom: this.tmp_object.nom, pw: this.tmp_object.pw, 
        ecran: this.tmp_object.ecran, flag_edit: 1 }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.tmp.forEach((element, i) => {
          if (element.id == result.id) {
            this.tmp[i] = result;
          }
        });
        this.dataSource = Array.from(this.tmp);
      }
    });
  }

  delete(a) {
    this.tmp.forEach(element => {
      if (element.id == a) {
        this.tmp_object = element;
      }
    });
    this.tmp = this.tmp.filter(item => item !== this.tmp_object);

    this.dataSource = Array.from(this.tmp);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewDialog, {
      width: '400px',
      data: { id: this.id, nom: this.nom, pw: this.pw, ecran: this.ecran, flag_edit: 0 }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.tmp.push(result);
        this.dataSource = Array.from(this.tmp);
      }
    });
  }

}


export interface EcranSelect {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'dialog-overview-dialog',
  templateUrl: 'dialog-overview-dialog.html',
  styleUrls: ['./compte-list.component.css']
})
export class DialogOverviewDialog {

  ecrans: EcranSelect[] = [
    { value: 'Admin', viewValue: 'Admin' },
    { value: 'Chef du projet', viewValue: 'Chef du projet' },
    { value: 'Salarié', viewValue: 'Salarié' }
  ];


  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}