export interface words {
	names: { petName: string; wizardName: string };
	creatures: { creature1: string; creature2: string };
	ad: {adj: string[], adv: string}; // len 2
	nouns: string[]; // len 3
	verbs: { pastTense: string[]; present: string[] };
	misc: {
		specialty: string;
		emotion: string;
		outfit: string;
		phrases: string[];
		times: { ofDay: string; ofYear: string };
		places: { home: ""; destination: "" };
	};
}

export const initialWords: words = {
	names: { petName: "", wizardName: "" },
	creatures: { creature1: "", creature2: "" },
	ad: {adj: ["", ""], adv: ""},
	nouns: ["", "", ""],
	verbs: { pastTense: ["", "", ""], present: ["", ""] },
	misc: {
		specialty: "",
		times: { ofDay: "", ofYear: "" },
		places: { home: "", destination: "" },
		outfit: "",
		phrases: ["", ""],
		emotion: "",
	},
};
