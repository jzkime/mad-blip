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

export interface SubjectType {
	sub_id: number;
	subject_name: string;
	subject_type: string;
}
