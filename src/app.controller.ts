import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
	@Get()
	getHello(): string {
		return `Welcome to the MadBlip API! \n
    Checkout the endpoints:
    Words (adjs, nouns, adv):
    /words, words/:type \n
    Subjects (names, times, outfits):
    /subjects, /subjects/:type,\n
    Phrases:
    /phrases, /phrases/random`;
	}
}
