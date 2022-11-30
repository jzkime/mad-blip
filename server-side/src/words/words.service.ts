import { Injectable } from "@nestjs/common";
import { InjectConnection } from "nest-knexjs";
import { WordTypes } from "src/interfaces";
import { Knex } from "knex";
import { WordShape } from "src/interfaces";
@Injectable()
export class WordsService {
	constructor(@InjectConnection() private readonly knex: Knex) {}

	KnexWords() {
		return this.knex<Array<WordShape>>("words as w")
			.leftJoin("word_types as wt", "w.word_type", "=", "wt.wordtype_id")
			.select("w.word_id", "w.word", "wt.word_type");
	}

	findAllWords(): Promise<Array<WordShape>> {
		return this.KnexWords();
	}

	findWordsOfType(type: WordTypes, limit: number): Promise<Array<WordShape>> {
		return this.KnexWords().orderByRaw("random()").limit(limit).where("wt.wordtype_id", type);
	}
}
