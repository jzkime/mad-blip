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

export interface SubjectShape {
	sub_id: number;
	subject_name: string;
	subject_type: string;
}
