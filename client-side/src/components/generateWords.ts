import {
	WordTypes,
	OptionalWords,
	DBShape,
	WordNames,
	SubjectTypes,
	DataNames,
	PathNames,
} from "../interfaces";
import axios from "axios";

// calls the API dynamically allowing for the path and query limit
const axiosGet = async (path: string, limit?: number) => {
	return await axios
		.get(`http://localhost:9000${path}${limit ? `?limit=${limit}` : ""}`)
		.then((res) => res.data)
		.catch(console.error);
};

// matches the key:value pairs of currentWords(keys) to words from the API(values)
// returns as an object of type OptionalWords
const changeWords = (
	keyArray: WordNames[],
	valueArray: DBShape[],
	path: keyof typeof DataNames
) => {
	const res: OptionalWords = {};
	for (let index = 0; index < keyArray.length; index++) {
		// loops through both arrays and assigns matching indexs (as both arrays have same length)
		// finds the corresponding key name from WordNames and assigns it a value with the matching index
		res[WordNames[keyArray[index]] as keyof OptionalWords] =
			valueArray[index][DataNames[path] as keyof DBShape];
	}
	return res;
};

const getWord = async (
	path: keyof typeof PathNames,
	type: WordTypes | SubjectTypes | "/random",
	namesReplace: Array<WordNames>,
	limit?: number
) => {
	// calls the API with the URL link and limit number
	const replaceWords = await axiosGet(`${PathNames[path]}${type}`, limit);
	// returns an object with now linked key:value pairs
	return changeWords(namesReplace, replaceWords, path);
};

// gets all words required for inputs
export const generateWords = async () => {
	const newAdjs = await getWord("word", WordTypes.adjective, [WordNames.adj1, WordNames.adj2], 2);
	const newNouns = await getWord(
		"word",
		WordTypes.nounThingPlural,
		[WordNames.noun1, WordNames.noun2, WordNames.noun3],
		3
	);
	const newNames = await getWord(
		"subj",
		SubjectTypes.name,
		[WordNames.petName, WordNames.wizardName],
		2
	);
	const creatures = await getWord(
		"word",
		WordTypes.nounAnimal,
		[WordNames.creature1, WordNames.creature2],
		2
	);
	const adv = await getWord("word", WordTypes.adverb, [WordNames.adv]);
	const pastVerbs = await getWord(
		"word",
		WordTypes.verbPast,
		[WordNames.pastV1, WordNames.pastV2, WordNames.pastV3],
		3
	);
	const presentVerbs = await getWord(
		"word",
		WordTypes.verbPresent,
		[WordNames.presentV1, WordNames.presentV2],
		2
	);
	const specialty = await getWord("subj", SubjectTypes.specialty, [WordNames.specialty]);
	const timeOfDay = await getWord("subj", SubjectTypes.timeOfDay, [WordNames.timeOfDay]);
	const timeOfYear = await getWord("subj", SubjectTypes.timeOfYear, [WordNames.timeOfYear]);
	const places = await getWord(
		"word",
		WordTypes.nounPlace,
		[WordNames.place1, WordNames.place2],
		2
	);
	const phrases = await getWord("phra", "/random", [WordNames.phrase1, WordNames.phrase2], 2);
	const outfit = await getWord("subj", SubjectTypes.clothing, [WordNames.outfit]);
	const emotion = await getWord("subj", SubjectTypes.emotion, [WordNames.emotion]);
	// returns singular object with all corresponding key:value pairs
	return {
		...newAdjs,
		...newNouns,
		...newNames,
		...creatures,
		...adv,
		...pastVerbs,
		...presentVerbs,
		...specialty,
		...timeOfDay,
		...timeOfYear,
		...places,
		...phrases,
		...outfit,
		...emotion,
	};
};
