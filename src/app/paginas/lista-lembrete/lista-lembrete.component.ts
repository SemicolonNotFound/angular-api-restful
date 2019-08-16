import { Lembrete } from './../../interfaces/lembrete';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LembreteService } from 'src/app/services/lembrete.service';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {
  public lembretes: Lembrete[];
  @ViewChild(ErrorMsgComponent, { static: true }) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService) { }

  ngOnInit() {
    this.getListaLembretes();
  }

  getListaLembretes() {
    this.lembreteService.getListaLembrete()
      .subscribe((listaLembretes: Lembrete[]) => {
        this.lembretes = listaLembretes;
      }, () => { this.errorMsgComponent.setError('Falha ao buscar lembretes.'); });
  }

  deletaLembrete(id: number) {
    this.lembreteService.deletaLembrete(id)
      .subscribe(() => {
        this.getListaLembretes();
      }, () => { this.errorMsgComponent.setError('Falha ao deletar o lembrete.'); });
  }

  existemLembretes(): boolean {
    return this.lembretes && this.lembretes.length > 0;
  }

}
