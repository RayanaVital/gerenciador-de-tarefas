import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[]{
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas): [];
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos(); //lista todas as tarefas
    tarefa.id = new Date().getTime(); //cria um id unico usando o stamp da data e segundos
    tarefas.push(tarefa); //insere a tarefa
    localStorage['tarefas'] = JSON.stringify(tarefas); //passa no stringify e coloca todas as tarefas no local Storage
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);// o find é um utilitario para fazer busca em listas, retorna a tarefa se o id passado for o mesmo que consta no array de tarefas
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => { //o forEach verifica 3 parametros, a tarefa em si, a posição da tarefa que esta iterando no momento e a lista de tarefas
      if(tarefa.id === obj.id) {// acha a tarefa correspondente
        objs[index] = tarefa;// atualiza a tarefa na posição
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas); //grava no local Storage
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos(); //por conta de alterar a lista e precisar reatribuir um valor a tarefas, não usa const e sim let
    tarefas = tarefas.filter(tarefa => tarefa.id !== id); //o filter retorna todas as tarefas so que filtrada de acordo com uma condição passada, nesse caso ira retornar todas com o id diferente mantem na lista
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id){
        objs[index].concluida =!obj.concluida; //atualiza se esta concluido, caso seja false ele faz o inverso 
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }


}
