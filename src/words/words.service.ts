import { Injectable } from "@nestjs/common";
import { InjectConnection } from "nest-knexjs";
import { Knex } from "knex";
@Injectable()
export class WordsService {
	constructor(@InjectConnection() private readonly knex: Knex) {}
    findAllWords() {
        return this.knex('words');
    }
}
