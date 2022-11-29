import { Controller, Get } from "@nestjs/common";
import { WordsService } from "./words.service";
@Controller()
export class WordsController {
	constructor(private readonly wordsService: WordsService) {}
	@Get()
	async getWords() {
        console.log('yo')
		return await this.wordsService.findAllWords();
	}
}
