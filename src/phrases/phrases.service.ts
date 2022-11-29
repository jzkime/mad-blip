import { Injectable } from "@nestjs/common";
import { InjectConnection } from "nest-knexjs";
import { Knex } from "knex";
import { PhraseShape } from "src/interfaces";
@Injectable()
export class PhrasesService {
	constructor(@InjectConnection() private readonly knex: Knex) {}

	findAllPhrases(): Promise<Array<PhraseShape>> {
		return this.knex("phrases");
	}
}
