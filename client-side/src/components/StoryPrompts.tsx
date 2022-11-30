import React, { ChangeEvent, Dispatch, ReactElement, SetStateAction } from "react";
import { AllWords } from "../interfaces";

interface SetState {
	currentWords: AllWords;
	setCurrentWords: Dispatch<SetStateAction<AllWords>>;
}

const StoryPrompts: React.FC<SetState> = ({ currentWords, setCurrentWords }): ReactElement => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const key = e.target.name;
		let value = e.target.value;
		if (value !== "" && (key === "petName" || key === "wizardName")) {
			let arr = [...value];
			const first = arr.shift()?.toUpperCase();
			if (first) arr.unshift(first);
			value = arr.join("");
		}
		setCurrentWords({ ...currentWords, [key]: value });
	};

	return (
		<form id="prompt-form">
			<label>Creature1</label>
			<input
				name="creature1"
				value={currentWords.creature1}
				onChange={handleChange}
				placeholder="dragon"
			/>
			<label>Name</label>
			<input
				name="petName"
				value={currentWords.petName}
				onChange={handleChange}
				placeholder="Blurg"
			/>
			<label>Adjective </label>
			<input
				name="adj1"
				value={currentWords.adj1}
				onChange={handleChange}
				placeholder="cheerful"
			/>
			<label>Name</label>
			<input
				name="wizardName"
				value={currentWords.wizardName}
				onChange={handleChange}
				placeholder="Gandalf"
			/>
			<label>Specialty</label>
			<input
				name="specialty"
				value={currentWords.specialty}
				onChange={handleChange}
				placeholder="dancing"
			/>
			<label>Place</label>
			<input
				name="destination"
				value={currentWords.place1}
				onChange={handleChange}
				placeholder="cave"
			/>
			<label>Noun Plural</label>
			<input
				name="noun1"
				value={currentWords.noun1}
				onChange={handleChange}
				placeholder="flowers"
			/>
			<label>Noun Plural</label>
			<input
				name="noun2"
				value={currentWords.noun2}
				onChange={handleChange}
				placeholder="gems"
			/>
			<label>Noun Plural</label>
			<input
				name="noun3"
				value={currentWords.noun3}
				onChange={handleChange}
				placeholder="berries"
			/>
			<label>Specific Time of Day</label>
			<input
				name="timeOfDay"
				value={currentWords.timeOfDay}
				onChange={handleChange}
				placeholder="3am"
			/>
			<label>Place2</label>
			<input
				name="home"
				value={currentWords.place2}
				onChange={handleChange}
				placeholder="cottage"
			/>
			<label>Adjective2</label>
			<input
				name="adj2"
				value={currentWords.adj2}
				onChange={handleChange}
				placeholder="twisty"
			/>
			<label>Creature2</label>
			<input
				name="creature2"
				value={currentWords.creature2}
				onChange={handleChange}
				placeholder="goblin"
			/>
			<label>Past Tense Verb</label>
			<input
				name="pastV1"
				value={currentWords.pastV1}
				onChange={handleChange}
				placeholder="smiled"
			/>
			<label>Phrase</label>
			<input
				name="phrase1"
				value={currentWords.phrase1}
				onChange={handleChange}
				placeholder="Hello there."
			/>
			<label>Past Tense Verb</label>
			<input
				name="pastV2"
				value={currentWords.pastV2}
				onChange={handleChange}
				placeholder="pulled"
			/>
			<label>Time of Year</label>
			<input
				name="timeOfYear"
				value={currentWords.timeOfYear}
				onChange={handleChange}
				placeholder="last Summer"
			/>
			<label>Clothing piece</label>
			<input
				name="outfit"
				value={currentWords.outfit}
				onChange={handleChange}
				placeholder="hat"
			/>
			<label>Verb</label>
			<input
				name="presentV1"
				value={currentWords.presentV1}
				onChange={handleChange}
				placeholder="jump"
			/>
			<label>Adverb</label>
			<input
				name="adv"
				value={currentWords.adv}
				onChange={handleChange}
				placeholder="gently"
			/>
			<label>Emotion</label>
			<input
				name="emotion"
				value={currentWords.emotion}
				onChange={handleChange}
				placeholder="sad"
			/>
			<label>Phrase2</label>
			<input
				name="phrase2"
				value={currentWords.phrase2}
				onChange={handleChange}
				placeholder="This is only the beginning."
			/>
			<label>Past Tense Verb</label>
			<input
				name="pastV3"
				value={currentWords.pastV3}
				onChange={handleChange}
				placeholder="patted"
			/>
			<label>Present Tense Verb</label>
			<input
				name="presentV2"
				value={currentWords.presentV2}
				onChange={handleChange}
				placeholder="laughing"
			/>
		</form>
	);
};
export default StoryPrompts;
