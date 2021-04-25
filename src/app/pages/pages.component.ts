import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PerfilComponent } from './perfil/perfil.component';
import { ContraseniaComponent } from './contrasenia/contrasenia.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadActiveMain();
  }

  loadActiveMain() {
    var header = document.getElementById("main");
    var btns = header.getElementsByClassName("link");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }

  onProfile() {
    var profile = document.getElementById("profile");
    if (profile.style.display === "none") {
      profile.style.display = "block";
    } else {
      profile.style.display = "none";
    }
  }

  editProfile() {
    console.log('editar')
    const dialogRef = this.dialog.open(PerfilComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  changePass() {
    console.log('editar')
    const dialogRef = this.dialog.open(ContraseniaComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
