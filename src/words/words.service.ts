import { Injectable } from "@nestjs/common";
import { InjectConnection } from "nest-knexjs";
import { WordTypes } from "src/interfaces";
import { Knex } from "knex";
import { WordShape } from "src/interfaces";
@Injectable()
export class WordsService {
	constructor(@InjectConnection() private readonly knex: Knex) {}
	findAllWords(): Promise<Array<WordShape>> {
		return this.knex("words as w")
			.leftJoin("word_types as wt", "w.word_type", "=", "wt.wordtype_id")
			.select("w.word_id", "w.word", "wt.word_type");
	}
	async findWordsOfType(type: WordTypes, limit: number): Promise<Array<WordShape>> {
		return await this.knex("words AS w")
			.leftJoin("word_types AS wt", "wt.wordtype_id", "=", "w.word_type")
			.select("w.word", "wt.word_type")
			.orderByRaw("random()")
			.limit(limit)
			.where("wt.wordtype_id", type);
	}
}
