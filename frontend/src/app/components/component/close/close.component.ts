import { Component, OnInit } from '@angular/core';
import {SolicitacoesService} from "../../service/solicitacoes/solicitacoes.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.css']
})
export class CloseComponent implements OnInit {
  observacao: string = ""

  constructor(private solicitacoesService: SolicitacoesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  reprove(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(!!id && !!this.observacao) this.solicitacoesService.changeStatus("3", id, this.observacao)
  }
}
