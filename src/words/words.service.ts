import { Injectable } from "@nestjs/common";
import { InjectConnection } from "nest-knexjs";
import { WordTypes } from "src/interfaces";
import { Knex } from "knex";
@Injectable()
export class WordsService {
	constructor(@InjectConnection() private readonly knex: Knex) {}
	findAllWords() {
		return this.knex("words");
	}
	async findWordsOfType(type: WordTypes, limit: number) {
		return await this.knex("words AS w")
			.leftJoin("word_types AS wt", "wt.wordtype_id", "=", "w.word_type")
			.select("w.word", "wt.word_type")
			.orderByRaw("random()")
			.limit(limit)
			.where("wt.wordtype_id", type);
	}
}
