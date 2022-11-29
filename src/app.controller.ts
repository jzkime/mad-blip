import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return `Welcome to the MadBlip API! try out /wizard`
  }
}
