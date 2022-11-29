import { Injectable } from "@nestjs/common";
import { InjectConnection } from "nest-knexjs";
import { Knex } from "knex";
import { SubjectType } from "src/interfaces";
@Injectable()
export class SubjectsService {
	constructor(@InjectConnection() private readonly knex: Knex) {}

	findAllSubjects(): Promise<Array<SubjectType>> {
		return this.knex("subjects as s")
			.leftJoin("subject_types as st", "s.sub_type", "=", "st.subtype_id")
			.select("s.sub_id", "s.subject_name", "st.subject_type");
	}
}
