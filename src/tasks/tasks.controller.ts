import { Controller, Get } from '@nestjs/common';

@Controller()
export class TaskController {
  @Get('/tasks')
  getTasks(): string {
    return 'Aqui lista todas as tarefas';
  }
}