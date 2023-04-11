import * as dotenv from "dotenv";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TasksModule } from "./tasks/tasks.module";
import { MongooseModule } from "@nestjs/mongoose";
import { databaseProviders } from "./database/database.providers";

dotenv.config();

@Module({
  imports: [TasksModule, MongooseModule.forRoot(`${process.env.DATABASE_URL}`)],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
})
export class AppModule {}
