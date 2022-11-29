import { Injectable } from "@nestjs/common";
import { InjectConnection } from "nest-knexjs";
import { Knex } from "knex";
import { SubjectShape } from "src/interfaces";
@Injectable()
export class SubjectsService {
	constructor(@InjectConnection() private readonly knex: Knex) {}

	findAllSubjects(): Promise<Array<SubjectShape>> {
		return this.knex("subjects as s")
			.leftJoin("subject_types as st", "s.sub_type", "=", "st.subtype_id")
			.select("s.sub_id", "s.subject_name", "st.subject_type");
	}

	findSpecificSubjects(type, limit) {
		return this.knex("subjects as s")
			.leftJoin("subject_types as st", "s.sub_type", "=", "st.subtype_id")
			.select("s.sub_id", "s.subject_name", "st.subject_type")
			.where("st.subtype_id", type)
			.limit(limit)
			.orderByRaw("random()");
	}
}
