import { Injectable } from "@nestjs/common";
import { InjectConnection } from "nest-knexjs";
import { Knex } from "knex";
import { SubjectShape } from "src/interfaces";
@Injectable()
export class SubjectsService {
	constructor(@InjectConnection() private readonly knex: Knex) {}

	KnexSubject() {
		return this.knex<Array<SubjectShape>>("subjects as s")
			.leftJoin("subject_types as st", "s.sub_type", "=", "st.subtype_id")
			.select("s.sub_id", "s.subject_name", "st.subject_type");
	}

	findAllSubjects(): Promise<Array<SubjectShape>> {
		return this.KnexSubject();
	}

	findSpecificSubjects(type: number, limit: number) {
		return this.KnexSubject().where("st.subtype_id", type).limit(limit).orderByRaw("random()");
	}
}
