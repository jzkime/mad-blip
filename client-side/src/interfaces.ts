export interface AllWords {
	wizardName: string;
	petName: string;
	creature1: string;
	creature2: string;
	adj1: string;
	adj2: string;
	adv: string;
	noun1: string;
	noun2: string;
	noun3: string;
	pastV1: string;
	pastV2: string;
	pastV3: string;
	presentV1: string;
	presentV2: string;
	specialty: string;
	timeOfDay: string;
	timeOfYear: string;
	home: string;
	destination: string;
	outfit: string;
	phrase1: string;
	phrase2: string;
	emotion: string;
}

export enum WordNames {
	wizardName = 1,
	petName,
	creature1,
	creature2,
	adj1,
	adj2,
	adv,
	noun1,
	noun2,
	noun3,
	pastV1,
	pastV2,
	pastV3,
	presentV1,
	presentV2,
	specialty,
	timeOfDay,
	timeOfYear,
	home,
	destination,
	outfit,
	phrase1,
	phrase2,
	emotion,
}

export type OptionalWords = {
	[Property in keyof AllWords]?: string;
};

export interface WordsShape {
	word_id: number;
	word: string;
	word_type: string;
}

export interface SubjectsShape {
	sub_id: number;
	subject_name: string;
	subject_type: string;
}

export interface PhrasesShape {
	phrase_id: number;
	phrase: string;
}

export type DBShape = WordsShape | SubjectsShape | PhrasesShape;

export const initialWords: AllWords = {
	wizardName: "",
	petName: "",
	creature1: "",
	creature2: "",
	adj1: "",
	adj2: "",
	adv: "",
	noun1: "",
	noun2: "",
	noun3: "",
	pastV1: "",
	pastV2: "",
	pastV3: "",
	presentV1: "",
	presentV2: "",
	specialty: "",
	timeOfDay: "",
	timeOfYear: "",
	home: "",
	destination: "",
	outfit: "",
	phrase1: "",
	phrase2: "",
	emotion: "",
};

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

export enum SubjectTypes {
	"name" = 1,
	"specialty",
	"timeOfDay",
	"timeOfYear",
	"clothing",
	"emotion",
}

export enum DataNames {
	"w" = "word",
	"s" = "subject_name",
	"p" = "phrase",
}

export enum PathNames {
	"w" = "/words/",
	"s" = "/subjects/",
	"p" = "/phrases/random",
}
