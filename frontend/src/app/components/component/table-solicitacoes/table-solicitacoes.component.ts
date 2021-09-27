import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableSolicitacoesDataSource, TableSolicitacoesItem } from './table-solicitacoes-datasource';

@Component({
  selector: 'app-table-solicitacoes',
  templateUrl: './table-solicitacoes.component.html',
  styleUrls: ['./table-solicitacoes.component.css']
})
export class TableSolicitacoesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableSolicitacoesItem>;
  dataSource: TableSolicitacoesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new TableSolicitacoesDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
