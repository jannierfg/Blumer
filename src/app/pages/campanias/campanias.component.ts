import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  position: number;
  apellido: string;
  carbonpay: string;
  type: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Pedro Jose', apellido: 'Perez Sanchez', carbonpay: '1726 CP', type: 'NORMAL', action: '' },
  { position: 2, name: 'Pedro Jose', apellido: 'Perez Sanchez', carbonpay: '1726 CP', type: 'EMPRESA', action: '' },
  { position: 3, name: 'Pedro Jose', apellido: 'Perez Sanchez', carbonpay: '1726 CP', type: 'EMPRENDIMIENTO', action: '' },
  { position: 4, name: 'Pedro Jose', apellido: 'Perez Sanchez', carbonpay: '1726 CP', type: 'FUNDACION', action: '' }
];

@Component({
  selector: 'app-campanias',
  templateUrl: './campanias.component.html',
  styleUrls: ['./campanias.component.css']
})
export class CampaniasComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'name', 'apellido', 'carbonpay','type', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  view: boolean = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }

  edit(element) {
    let edit = 'edit' + element
    var editar = document.getElementById(edit);
    if (window.getComputedStyle(editar).display === "block") {
      editar.classList.remove("mostrar");
      editar.classList.add("ocultar");
    } else {
      var btns = document.getElementsByClassName("edit-info");
      for (var i = 0; i < btns.length; i++) {
        btns[i].classList.add("ocultar");
      }
      editar.classList.remove("ocultar");
      editar.classList.add("mostrar");
    }
  }

  changeCheck(event, row) {
    this.view = event;
    console.log(row)
  }

}
