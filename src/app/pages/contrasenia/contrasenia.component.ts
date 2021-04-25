import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contrasenia',
  templateUrl: './contrasenia.component.html',
  styleUrls: ['./contrasenia.component.css']
})
export class ContraseniaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContraseniaComponent>) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave() {
    this.dialogRef.close();
  }

}
