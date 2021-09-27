import { Component, OnInit } from '@angular/core';
import {SolicitacoesModel} from "./solicitacoes.model";
import {SolicitacoesService} from '../../service/solicitacoes/solicitacoes.service'

@Component({
  selector: 'app-solicitacoes',
  templateUrl: 'solicitacoes.component.html',
  styleUrls: ['solicitacoes.component.css']
})
export class SolicitacoesComponent implements OnInit {

  data: SolicitacoesModel = {
    nomeSolicitante: "",
    preco: 0,
    descricao: "",
  }

  constructor(private insert: SolicitacoesService) { }

  ngOnInit(): void {
  }

  registerSolicitacao(): void {
    if(!!this.data.nomeSolicitante && !!this.data.preco && !!this.data.descricao){
      this.insert.createSolicitacao(this.data)
    }
  }
}
