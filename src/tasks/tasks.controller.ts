import { Controller, Get } from '@nestjs/common';

@Controller()
export class TaskController {
  @Get('/tasks')
  getTasks() {
    return 'Aqui lista todas as tarefas';
  }
}
