import React, { ReactElement, useState, useEffect } from "react";
import Story from "./Story";
import StoryPrompts from "./StoryPrompts";
import {
	AllWords,
	initialWords,
	WordTypes,
	OptionalWords,
	AdjShape,
	WordNames,
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

	const axiosGet = (path: string, limit?: number | undefined) => {
		return axios
			.get(`http://localhost:9000${path}${limit ? `?limit=${limit}` : ""}`)
			.then((res) => res.data)
			.catch(console.error);
	};
	const changeWords = (keyArray: WordNames[], valueArray: AdjShape[]) => {
		const res: OptionalWords = {};
		for (let index = 0; index < keyArray.length; index++) {
			res[WordNames[keyArray[index]] as keyof OptionalWords] = valueArray[index].word;
		}
		return res;
	};
	const getAdjs = async () => {
		const newAdjs = await axiosGet(`/words/${WordTypes.adjective}`, 2);
		let words = changeWords([WordNames.adj1, WordNames.adj2], newAdjs);
		return words;
	};
	const getNouns = async () => {
		const newNouns = await axiosGet(`/words/${WordTypes.nounThingPlural}`, 3);
		let words = changeWords([WordNames.noun1, WordNames.noun2, WordNames.noun3], newNouns);
		return words;
	};
	const handleGenerate = async () => {
		const newAdjs = await getAdjs();
		const newNouns = await getNouns();
		setCurrentWords({ ...currentWords, ...newAdjs, ...newNouns });
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
