import { TarefaService } from './shared/tarefa.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';



@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule, 

  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
