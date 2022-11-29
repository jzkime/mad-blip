import { Controller, Get, Param, Query, Req } from "@nestjs/common";
import { WordsService } from "./words.service";
@Controller("words")
export class WordsController {
	constructor(private readonly wordsService: WordsService) {}
	@Get()
	async getWords() {
		return await this.wordsService.findAllWords();
	}
	@Get("/:type")
	async getWordTypeLimit(@Param("type") param, @Query("limit") query) {
		return await this.wordsService.findWordsOfType(param, query || 1);
	}
}
