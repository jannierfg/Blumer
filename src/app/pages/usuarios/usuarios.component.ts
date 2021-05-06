import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DashService } from '../../services/dash.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['select', 'first_name', 'last_name', 'phone', 'email', 'wallet', 'action'];
  dataSource: any = [];
  // selection = new SelectionModel<PeriodicElement>(true, []);
  users: any = [];
  selection: any = [];

  view: boolean = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dashService: DashService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.dashService.getUsers(1, 'cuetoadolfo').subscribe(
      res => {
        this.users = res;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
      },
      err => console.log(err)
    )
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
  }
}
