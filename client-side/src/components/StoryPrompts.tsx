import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { AllWords } from "../interfaces";

interface SetState {
	currentWords: AllWords;
	setCurrentWords: Dispatch<SetStateAction<AllWords>>;
}

const StoryPrompts: React.FC<SetState> = ({ currentWords, setCurrentWords }) => {
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
		<div id="story-prompt-container">
			<form id="prompt-form">
				<label>Creature 1:</label>
				<input
					name="creature1"
					value={currentWords.creature1}
					onChange={handleChange}
					placeholder="dragon"
				/>
				<label>Pet Name:</label>
				<input
					name="petName"
					value={currentWords.petName}
					onChange={handleChange}
					placeholder="Blurg"
				/>
				<label>Adj</label>
				<input name="adj1" value={currentWords.adj1} onChange={handleChange} />
				<label>Name:</label>
				<input name="wizardName" value={currentWords.wizardName} onChange={handleChange} />
				<label>Specialty</label>
				<input name="specialty" value={currentWords.specialty} onChange={handleChange} />
				<label>Place</label>
				<input
					name="destination"
					value={currentWords.destination}
					onChange={handleChange}
				/>
				<label>Noun1</label>
				<input name="noun1" value={currentWords.noun1} onChange={handleChange} />
				<label>Noun2</label>
				<input name="noun2" value={currentWords.noun2} onChange={handleChange} />
				<label>Noun3</label>
				<input name="noun3" value={currentWords.noun3} onChange={handleChange} />
				<label>Specific Time of Day</label>
				<input name="timeOfDay" value={currentWords.timeOfDay} onChange={handleChange} />
				<label>Place2</label>
				<input name="home" value={currentWords.home} onChange={handleChange} />
				<label>Adj2</label>
				<input name="adj2" value={currentWords.adj2} onChange={handleChange} />
				<label>Creature2</label>
				<input name="creature2" value={currentWords.creature2} onChange={handleChange} />
				<label>PastTense Verb</label>
				<input name="pastV1" value={currentWords.pastV1} onChange={handleChange} />
				<label>Phrase</label>
				<input name="phrase1" value={currentWords.phrase1} onChange={handleChange} />
				<label>PastTense Verb</label>
				<input name="pastV2" value={currentWords.pastV2} onChange={handleChange} />
				<label>Time of Year</label>
				<input name="timeOfYear" value={currentWords.timeOfYear} onChange={handleChange} />
				<label>Outfit</label>
				<input name="outfit" value={currentWords.outfit} onChange={handleChange} />
				<label>Present Verb</label>
				<input name="presentV1" value={currentWords.presentV1} onChange={handleChange} />
				<label>Adverb</label>
				<input name="adv" value={currentWords.adv} onChange={handleChange} />
				<label>Emotion</label>
				<input name="emotion" value={currentWords.emotion} onChange={handleChange} />
				<label>Phrase 2</label>
				<input name="phrase2" value={currentWords.phrase2} onChange={handleChange} />
				<label>Past Tense Verb</label>
				<input value={currentWords.pastV3} onChange={handleChange} />
				<label>Present Tense Verb</label>
				<input name="presentV2" value={currentWords.presentV2} onChange={handleChange} />
			</form>
		</div>
	);
};
export default StoryPrompts;
