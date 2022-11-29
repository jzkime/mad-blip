import { Controller, Get } from "@nestjs/common";
import { SubjectsService } from "./subjects.service";
import { SubjectType } from "src/interfaces";

@Controller("subjects")
export class SubjectsController {
    constructor(private readonly subjectsService: SubjectsService) {}
    @Get()
    async getAllSubjects(): Promise<Array<SubjectType>>{
        return await this.subjectsService.findAllSubjects();
    }
}
