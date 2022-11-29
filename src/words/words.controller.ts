import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";
import { WordsService } from "./words.service";
@Controller('words')
export class WordsController {
	constructor(private readonly wordsService: WordsService) {}
	@Get()
	async getWords() {
        console.log('yo')
		return await this.wordsService.findAllWords();
	}
	@Get('/:type') 
	async getWordType(@Req() req: Request): Promise<string> {
		return`return specific type`
	}
}
