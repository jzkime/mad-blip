import { Controller, Get } from "@nestjs/common";
import { PhraseShape } from "src/interfaces";
import { PhrasesService } from "./phrases.service";

@Controller("phrases")
export class PhrasesController {
	constructor(private readonly phrasesService: PhrasesService) {}
	@Get()
	getAllPhrases(): Promise<Array<PhraseShape>> {
		return this.phrasesService.findAllPhrases();
	}
}
