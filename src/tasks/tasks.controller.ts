import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Patch,
} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Task } from "./entities/task.entity";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Post("create")
  create(@Body() createTask: Task) {
    return this.tasksService.create(createTask);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.tasksService.remove(id);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTask: Task) {
    return this.tasksService.update(id, updateTask);
  }
}
