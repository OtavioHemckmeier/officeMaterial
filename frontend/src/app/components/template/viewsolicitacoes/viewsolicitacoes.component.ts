import {Component, OnInit, ViewChild} from '@angular/core';
import {SolicitacoesService} from "../../service/solicitacoes/solicitacoes.service";
import {SolicitacoesModel} from "../solicitacoes/solicitacoes.model";
import {MatTable} from '@angular/material/table';
import {TableSolicitacoesItem} from "../../component/table-solicitacoes/table-solicitacoes-datasource";

interface Grupo {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-viewsolicitacoes',
    templateUrl: './viewsolicitacoes.component.html',
    styleUrls: ['./viewsolicitacoes.component.css']
})
export class ViewsolicitacoesComponent implements OnInit {
    @ViewChild(MatTable) table!: MatTable<TableSolicitacoesItem>;
    solicitacoes: unknown = []
    status: string = ""
    descricao: string = ""
    solicitante: string = ""

    displayedColumns = ['nomeSolicitante', 'status', 'preco', 'descricao', 'action', 'observacao']
    displayedColumnsSolicitante = ['nomeSolicitante', 'status', 'preco', 'descricao', 'observacao']

    constructor(private solicitacoesService: SolicitacoesService) {
    }

    ngOnInit(): void {
        this.solicitacoesService.getSolicitors(undefined, undefined, undefined).then(response => {
            // @ts-ignore
            this.table.dataSource = response.map(e => {
                switch (e.status) {
                    case "1": {
                        e.status = "Em andamento"
                        break
                    }
                    case "2": {
                        e.status = "Aprovado"
                        break
                    }
                    case "3": {
                        e.status = "Reprovado"
                        break
                    }
                }

                return e
            });
            this.solicitacoes = response;
        })
    }

    get typeUser(): string {
        const session = localStorage.getItem("sessionUser")

        if (!!session) {
            const dataUser = JSON.parse(session);
            return dataUser.userType
        } else {
            return ""
        }
    }

    changeStatusFilter(): void {
        this.solicitacoesService.getSolicitors(this.status, this.solicitante, this.descricao).then(response => {
            // @ts-ignore
            this.table.dataSource = response.map(e => {
                switch (e.status) {
                    case "1": {
                        e.status = "Em andamento"
                        break
                    }
                    case "2": {
                        e.status = "Aprovado"
                        break
                    }
                    case "3": {
                        e.status = "Reprovado"
                        break
                    }
                }

                return e
            });
            this.solicitacoes = response;
        })
    }

    grupos: Grupo[] = [
        {value: "", viewValue: ''},
        {value: '1', viewValue: 'Em andamento'},
        {value: '2', viewValue: 'Aprovado'},
        {value: '3', viewValue: 'Reprovado'}
    ];
}
