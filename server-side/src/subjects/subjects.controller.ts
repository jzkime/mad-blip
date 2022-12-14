import { Controller, Get, Param, Query } from "@nestjs/common";
import { SubjectsService } from "./subjects.service";
import { SubjectShape } from "src/interfaces";

@Controller("subjects")
export class SubjectsController {
	constructor(private readonly subjectsService: SubjectsService) {}
	@Get()
	async getAllSubjects(): Promise<Array<SubjectShape>> {
		return await this.subjectsService.findAllSubjects();
	}
	@Get("/:type")
	async getSubjectByType(
		@Param("type") type,
		@Query("limit") limit
	): Promise<Array<SubjectShape>> {
		return this.subjectsService.findSpecificSubjects(type, limit || 1);
	}
}
