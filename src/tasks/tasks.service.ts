/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Task, TaskDocument } from "./entities/task.entity";
import { Model } from "mongoose";

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async findAll(category: string): Promise<Task[]> {
    return await this.taskModel.find(category ? { category } : null).exec();
  }

  async create(task: Task): Promise<Task> {
    const newTask = new this.taskModel(task);
    return await newTask.save();
  }

  async remove(id: string): Promise<Task> {
    return await this.taskModel.findByIdAndRemove(id).exec();
  }

  async findOne(id: string): Promise<Task> {
    return await this.taskModel.findById(id).exec();
  }

  async update(id: string, task: Task): Promise<Task> {
    return await this.taskModel
      .findByIdAndUpdate(id, task, { new: true })
      .exec();
  }
}
