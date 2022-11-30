import React, { ReactElement, useState, useEffect } from "react";
import Story from "./Story";
import StoryPrompts from "./StoryPrompts";
import {
	AllWords,
	initialWords,
	WordTypes,
	OptionalWords,
	DBShape,
	WordNames,
	SubjectTypes,
	DataNames,
	PathNames,
} from "../interfaces";
import axios from "axios";
/**
 * Todo:
 *  Button: generate call to backend that will fetch random words
 *  Story Component: pass in words
 *  Button: Clear inputs
 */

const ContentContainer: React.FC = (): ReactElement => {
	const [currentWords, setCurrentWords] = useState<AllWords>(initialWords);
	const [isStoryHidden, setIsStoryHidden] = useState<boolean>(true);

	const axiosGet = (path: string, limit?: number) => {
		return axios
			.get(`http://localhost:9000${path}${limit ? `?limit=${limit}` : ""}`)
			.then((res) => res.data)
			.catch(console.error);
	};
	const changeWords = (
		keyArray: WordNames[],
		valueArray: DBShape[],
		path: keyof typeof DataNames
	) => {
		const res: OptionalWords = {};
		for (let index = 0; index < keyArray.length; index++) {
			res[WordNames[keyArray[index]] as keyof OptionalWords] =
				valueArray[index][DataNames[path] as keyof DBShape];
		}
		return res;
	};

	const getWord = async (
		path: keyof typeof PathNames,
		type: WordTypes | SubjectTypes,
		namesReplace: Array<WordNames>,
		limit?: number
	) => {
		const replaceWords = await axiosGet(`${PathNames[path]}${type}`, limit);
		return changeWords(namesReplace, replaceWords, path);
	};
	const handleGenerate = async () => {
		const newAdjs = await getWord(
			"word",
			WordTypes.adjective,
			[WordNames.adj1, WordNames.adj2],
			2
		);
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
		setCurrentWords({
			...currentWords,
			...newAdjs,
			...newNouns,
			...newNames,
			...creatures,
			...adv,
			...pastVerbs,
		});
	};

	useEffect(() => {
		const replace: OptionalWords = {};
		for (let key in currentWords) {
			const isInStorage: string | null = localStorage.getItem(key);
			if (isInStorage) {
				replace[key as keyof OptionalWords] = isInStorage;
			}
		}
		setCurrentWords({ ...currentWords, ...replace });
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		for (let key in currentWords) {
			if (currentWords[key as keyof OptionalWords]) {
				localStorage.setItem(key, currentWords[key as keyof OptionalWords]);
			}
		}
	}, [currentWords]);

	return (
		<section id="content-container">
			<div id="story-prompt-container">
				<button onClick={handleGenerate}>generate</button>
				<StoryPrompts currentWords={currentWords} setCurrentWords={setCurrentWords} />
			</div>
			<div id="content-right">
				<button onClick={() => setIsStoryHidden(!isStoryHidden)}>
					{isStoryHidden ? (
						<img src="closeEye.png" alt="a closed eye" />
					) : (
						<img src="openEye.png" alt="an openned eye" />
					)}
				</button>

				{!isStoryHidden && (
					<Story isStoryHidden={isStoryHidden} currentWords={currentWords} />
				)}
			</div>
		</section>
	);
};

export default ContentContainer;
