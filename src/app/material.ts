import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        MatInputModule, 
        MatTabsModule,
        MatPaginatorModule,
        MatTableModule,
        MatDialogModule,
        MatCheckboxModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        MatInputModule, 
        MatTabsModule,
        MatPaginatorModule,
        MatTableModule,
        MatDialogModule,
        MatCheckboxModule
    ]
})

export class MaterialModule { }