export enum WordTypes {
	"adjective" = 1,
	"adverb",
	"nounThing",
	"nounThingPlural",
	"nounPlace",
	"nounAnimal",
	"verbPast",
	"verbPresent",
}

export interface WordShape {
	word_id: number;
	word: string;
	word_type: string;
}

export enum SubjectTypes {
	"name" = 1,
	"specialty",
	"timeOfDay",
	"timeOfYear",
	"clothing",
	"emotion",
}

export interface SubjectShape {
	sub_id: number;
	subject_name: string;
	subject_type: string;
}

export interface PhraseShape {
	phrase_id: number;
	phrase: string;
}
