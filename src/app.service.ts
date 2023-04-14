import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Cargoffer manager api rest is on air!";
  }
}
