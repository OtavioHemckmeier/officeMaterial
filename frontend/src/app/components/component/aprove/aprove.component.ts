import { Component, OnInit } from '@angular/core';
import {SolicitacoesService} from "../../service/solicitacoes/solicitacoes.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-aprove',
  templateUrl: './aprove.component.html',
  styleUrls: ['./aprove.component.css']
})
export class AproveComponent implements OnInit {
  observacao: string = ""
  constructor(private solicitacoesService: SolicitacoesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  aprove(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(!!id) this.solicitacoesService.changeStatus("2", id, this.observacao)
  }
}
