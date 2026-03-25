import {
	Controller,
	Get,
	Param,
	Query,
	Delete,
	Body,
	Post,
	Put
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';

@Controller('tasks')
export class TasksController {
	constructor(private readonly taskService: TasksService) { }

	@Get()
	getTasks() {
		return this.taskService.listAllTasks()
	}

	@Get("/busca")
	findManyTasks(@Query() queryParam: any) {
		return this.taskService.listAllTasks()
	}

	@Get(":id")
	findSingleTask(@Param('id') id: string) {
		return this.taskService.findOneTask(id)
	}

	@Post()
	createTask (@Body() createTaskDto: CreateTaskDto){
		return this.taskService.create(createTaskDto)
	}

	@Put (":id") //Patch
	updateTasks(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
		return this.taskService.update(id, updateTaskDto)
	}

	@Delete(":id")
	deleteTasks(@Param('id') id: string) {
		return this.taskService.delete(id)
	}

}
