import { Component, OnInit, Inject } from '@angular/core';
import { missions } from '../missions';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
}


export interface missions {
  nom: string;
  client: string;
  domain: string;
}

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})

export class PubliqueComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'client', 'domain', 'actions'];
  dataSource: any = missions;
  tmp: any = missions;
  tmp_object: any = missions;

  id: string;
  nom: string;
  client: string;
  ville: string;
  departement: string;
  annee_debut: string;
  annee_fin: string;
  montant: string;
  detail: string;
  image: string;
  domain: string;
  flag_edit: boolean;

  admin_chef: boolean = false;

  constructor(
    private router: Router, public dialog: MatDialog
  ) { }

  show(a) {
    // console.log(a);
    this.router.navigate([`/mission/${a}`]);
  }
  ngOnInit() {
    let tmp = localStorage.getItem('token');
    if (tmp === 'haskdjheakjfaejkfbjaf' || tmp === 'queryiqeryiereruqer') {
      this.admin_chef = true;
    }
  }

  openDialogEdit(a): void {
    this.tmp.forEach(element => {
      if (element.id == a) {
        this.tmp_object = element;
      }
    });

    const dialogRef = this.dialog.open(DialogOverviewDialogMission, {
      width: '400px',
      data: { id: this.tmp_object.id,
        nom: this.tmp_object.nom,
        client: this.tmp_object.client,
        ville: this.tmp_object.ville,
        departement: this.tmp_object.departement,
        annee_debut: this.tmp_object.annee_debut,
        annee_fin: this.tmp_object.annee_fin,
        montant: this.tmp_object.montant,
        detail: this.tmp_object.detail,
        image: this.tmp_object.image,
        domain: this.tmp_object.domain,
        flag_edit: 1 }
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
    const dialogRef = this.dialog.open(DialogOverviewDialogMission, {
      width: '400px',
      data: {
        id: this.id,
        nom: this.nom,
        client: this.client,
        ville: this.ville,
        departement: this.departement,
        annee_debut: this.annee_debut,
        annee_fin: this.annee_fin,
        montant: this.montant,
        detail: this.detail,
        image: this.image,
        domain: this.domain,
        flag_edit: 0,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.tmp.push(result);
        this.dataSource = Array.from(this.tmp);
      }
    });
  }

}

@Component({
  selector: 'dialog-mission-list',
  templateUrl: 'dialog-mission-list.html',
  styleUrls: ['./mission-list.component.css']
})
export class DialogOverviewDialogMission {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDialogMission>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
