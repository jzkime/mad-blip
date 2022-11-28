import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { AllWords } from "../interfaces";

interface SetState {
	currentWords: AllWords;
	setCurrentWords: Dispatch<SetStateAction<AllWords>>;
}

const StoryPrompts: React.FC<SetState> = ({ currentWords, setCurrentWords }) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		
	};

	return (
		<div id="story-prompt-container">
			<form id="prompt-form">
				<label>Creature 1:</label>
				<input
					name="creature1"
					value={currentWords.creature1}
					onChange={handleChange}
				/>
				<label>Pet Name:</label>
				<input value={"petName"} />
				<label>Adj</label>
				<input value={"adj"} />
				<label>Name:</label>
				<input value={"name"} />
				<label>Specialty</label>
				<input value={"specialty"} />
				<label>Place</label>
				<input value={"placeType"} />
				<label>Noun1</label>
				<input value={"noun"} />
				<label>Noun2</label>
				<input value={"noun2"} />
				<label>Noun3</label>
				<input value={"noun3"} />
				<label>Specific Time of Day</label>
				<input value={"specificTimeOfDay"} />
				<label>Place2</label>
				<input value={"place2"} />
				<label>Adj2</label>
				<input value={"adj2"} />
				<label>Creature2</label>
				<input value={"creature2"} />
				<label>PastTense Verb</label>
				<input value={"pastTenseVerb"} />
				<label>Phrase</label>
				<input value={"phrase"} />
				<label>PastTense Verb</label>
				<input value={"pastTenseVerb"} />
				<label>Time</label>
				<input value={"time"} />
				<label>Outfit</label>
				<input value={"outfit"} />
				<label>Verb</label>
				<input value={"verb"} />
				<label>Adj</label>
				<input value={"adj"} />
				<label>Emotion</label>
				<input value={"emotion"} />
				<label>Phrase 2</label>
				<input value={"phrase"} />
				<label>Past Tense Verb</label>
				<input value={"pastTenseVerb"} />
				<label>Present Tense Verb</label>
				<input value={"presentTenseVerb"} />
			</form>
		</div>
	);
};
export default StoryPrompts;
