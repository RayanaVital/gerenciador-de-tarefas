import { Router, Routes } from '@angular/router';
import { TarefaService } from './../shared/tarefa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa } from '../shared/tarefa.model';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;

  tarefa: Tarefa;

  constructor(private tarefaService: TarefaService, private router: Router) { }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }

  cadastrar(): void{
    if(this.formTarefa.form.valid){ //caso o formulario seja valido ele prosseguira o cadastro
      this.tarefaService.cadastrar(this.tarefa); //cadastra a tarefa e ira para a pagina de listagem
      this.router.navigate(["/tarefas"]);
    }
  }

}
