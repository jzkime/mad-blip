import React, { ReactElement, useState, useEffect } from "react";
import Story from "./Story";
import StoryPrompts from "./StoryPrompts";
import { AllWords, initialWords, OptionalWords } from "../interfaces";
import { generateWords } from "./generateWords";

const ContentContainer: React.FC = (): ReactElement => {
	const [currentWords, setCurrentWords] = useState<AllWords>(initialWords);
	const [isStoryHidden, setIsStoryHidden] = useState<boolean>(true);

	const handleGenerate = async () => {
		const words = await generateWords();
		setCurrentWords({
			...currentWords,
			...words,
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

	const handleClear = () => {
		setCurrentWords(initialWords);
		for (let key in currentWords) {
			const keyInStorage: string | null = localStorage.getItem(key);
			if (keyInStorage) {
				localStorage.removeItem(key);
			}
		}
	};

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
				<div id="prompt-top">
					<button onClick={handleGenerate}>
						<div id="generateButton"></div>
					</button>
					<button onClick={handleClear}>
						<div id="clearButton"></div>
					</button>
				</div>
				<StoryPrompts currentWords={currentWords} setCurrentWords={setCurrentWords} />
			</div>
			<div id="content-right">
				<button onClick={() => setIsStoryHidden(!isStoryHidden)}>
					{isStoryHidden ? (
						<img src="openEye.png" alt="an openned eye" />
					) : (
						<img src="closeEye.png" alt="a closed eye" />
					)}
				</button>

				{isStoryHidden ? (
					<Story currentWords={currentWords} />
				) : (
					<div className="story-container"></div>
				)}
			</div>
		</section>
	);
};

export default ContentContainer;
