import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar"
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SolicitacoesModel} from "../../template/solicitacoes/solicitacoes.model";
import {Router} from "@angular/router"

@Injectable({
    providedIn: 'root'
})
export class SolicitacoesService {

    baseUrl = "http://localhost:8080/"

    constructor(private snackBar: MatSnackBar, private http: HttpClient, private router: Router) {
    }

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, "x", {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ["msg-error"] : ["msg-success"],
        });
    }

    createSolicitacao(dataSolicitacao: SolicitacoesModel) {
        const session = localStorage.getItem("sessionUser")

        if (!!session) {
            const user = JSON.parse(session)
            let options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json', Authorization: ''},
                body: JSON.stringify({
                    nomeSolicitante: dataSolicitacao.nomeSolicitante,
                    preco: dataSolicitacao.preco,
                    descricao: dataSolicitacao.descricao,
                    status: '1',
                    userId: user.userId
                })
            };

            fetch(`${this.baseUrl}post`, options)
                .then(res => res.json())
                .then(res => {
                    if (!!res && res.message === "Posted!") {
                        this.showMessage("Inserido com Sucesso!", false)
                        this.router.navigate(["/list"])
                    } else if (!!res.errors.length) {
                        this.showMessage(res.message, true)
                    }
                })
                .catch(err => {
                    console.log(err)
                    this.showMessage(err.message, true)
                });
        }
    }

    async getSolicitacaoById(id: string) {
        return new Promise((resolve, reject) => {
            let options = {
                method: 'GET',
                headers: {'Content-Type': 'application/json', Authorization: ''},
                body: JSON.stringify({
                    id: id
                })
            };

            fetch(`${this.baseUrl}post/getById/`, options).then(res => {
                resolve(res)
            })
                .catch(err => {
                    console.log(err)
                    reject(err)
                    this.showMessage(err.message, true)
                });
        })
    }

    async changeStatus(new_status: string, id: string, observacao: string) {
        return new Promise((resolve, reject) => {
            let options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json', Authorization: ''},
                body: JSON.stringify({
                    id: id,
                    status: new_status,
                    observacao
                })
            };

            fetch(`${this.baseUrl}post/changeStatus/`, options).then(res => {
                if (res.ok) {
                    this.showMessage("Situação alterada com sucesso", false)
                    this.router.navigate(["/list"])
                }
            })
                .catch(err => {
                    console.log(err)
                    reject(err)
                    this.showMessage(err.message, true)
                });
        })
    }

    async getSolicitors(status:string | undefined, solicitante:string | undefined, descricao:string | undefined, ) {
        return new Promise((resolve, reject) => {
            const session = localStorage.getItem("sessionUser")

            if (!!session) {
                const user = JSON.parse(session)

                if (user.userType === "solicitante") {
                    let options = {
                        method: 'GET',
                    };

                    fetch(`${this.baseUrl}post/userId/?userId=${user.userId}`, options).then(res => res.json())
                        .then(res => {
                            resolve(res)
                        })
                        .catch(err => {
                            console.log(err)
                            reject(err)
                            this.showMessage(err.message, true)
                        });
                } else {
                    let options = {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json', Authorization: ''},
                        body: JSON.stringify({
                            status,
                            solicitante,
                            descricao,
                        })
                    };

                    fetch(`${this.baseUrl}post/get`, options).then(res => res.json())
                        .then(res => {
                            resolve(res)
                        })
                        .catch(err => {
                            console.log(err)
                            reject(err)
                            this.showMessage(err.message, true)
                        });
                }
            } else {
                reject(false)
            }
        })
    }
}
