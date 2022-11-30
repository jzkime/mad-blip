import React from "react";
import { AllWords } from "../interfaces";
// Story written by jzkime

interface PropWords {
	currentWords: AllWords;
	isStoryHidden: boolean;
}

const Story: React.FC<PropWords> = ({ isStoryHidden, currentWords }) => {
	const {
		petName,
		wizardName,
		creature1,
		creature2,
		adj1,
		adj2,
		adv,
		noun1,
		noun2,
		noun3,
		pastV1,
		pastV2,
		pastV3,
		presentV1,
		presentV2,
		place1,
		place2,
		specialty,
		timeOfDay,
		timeOfYear,
		phrase1,
		phrase2,
		outfit,
		emotion,
	} = currentWords;

	return (
		<div className={`story-container`}>
			<p>
				Once upon a time, there lived a <u>{adj1 || "adj"}</u> wizard named{" "}
				<u>{wizardName || "wizName"}</u> and their close friend <u>{petName || "name"}</u> the{" "}
				<u>{creature1 || "creature"}</u>. <u>{wizardName || "wizName"}</u> was best known for their
				proficiency in <u>{specialty || "specialty"}</u>, in which they were entirely masterful.
				However, this fixed admiration would sometimes be to their own detriment, as they
				would be so happy partaking in this hobby that they would hardly think of anything
				else.
			</p>
			<p>
				<u>{petName || "name"}</u> decided one day to venture out and bring their friend to a
				lovely little <u>{place1 || "place"}</u> deep in the forest that other creatures loved
				to boast about. It was said to be a marvel, filled with <u>{noun1 || "noun"}</u> and{" "}
				<u>{noun2 || "noun"}</u> that one could never stop staring at, for as soon as they stepped
				into the vicinity, they were immediately enthralled in the wonder of the{" "}
				<u>{place1 || "place"}</u>.
			</p>
			<p>
				For this journey, <u>{petName || "name"}</u> packed up several <u>{noun3 || "pluralNoun"}</u>, and
				at the last moment (<u>{timeOfDay || "time"}</u>) they were finally able to drag{" "}
				<u>{wizardName || "name"}</u> outside and to their adventure.
			</p>
			<p>
				The trail from their <u>{place2 || "place2"}</u> to the <u>{place1 || "place"}</u> was{" "}
				<u>{adj2 || "adj"}</u>, where beings of magic and trickery would appear out of seemingly
				nowhere, and do anything to get an unfortunate traveler's attention. One such being,
				a <u>{creature2 || "creature"}</u>, <u>{pastV1 || "pastTenseVerb"}</u> out in front of our wizard
				and <u>{creature1 || "creature1"}</u> duo, and said to them “<u>{phrase1 || "phrase"}</u>”
			</p>
			<p>
				Having no idea how to respond to this, <u>{wizardName || "name"}</u> simply{" "}
				<u>{pastV2 || "pastTenseVerb"}</u>. The creature continued to rattle on, but soon, the
				wizard was pleased to realize the last time they left their <u>{place2 || "place2"}</u> was{" "}
				<u>{timeOfYear || "timeOfYear"}</u>. Because they had never come across this creature until
				now, that meant this <u>{creature2 || "creature"}</u> had never heard about their love of{" "}
				<u>{specialty || "specialty"}</u> before.
			</p>
			<p>"And that's why-" </p>
			<p>
				However, before the <u>{creature2 || "creature2"}</u> could continue their spiel,{" "}
				<u>{wizardName || "wizName"}</u> held up their hand and asked, "Have you heard of{" "}
				<u>{specialty || "specialty"}</u>?"
			</p>
			<p>
				Oh, how <u>{wizardName || "name"}</u> delighted in their anecdotes of{" "}
				<u>{specialty || "specialty"}</u>. They were enthralled in the ever wonderful subject they
				loved so dearly, and despite <u>{petName || "name"}</u> constantly tugging on their{" "}
				<u>{outfit || "outfit"}</u>, once they started sharing they would not stop.{" "}
			</p>
			<p>
				As the story continued, the wizard began to notice the <u>{creature2 || "creature"}</u> was
				peering elsewhere, where they spotted another unsuspecting victim, to which their
				talons of social entrapment were now being aimed. This made <u>{wizardName || "name"}</u>’s
				enthusiasm waver. Unfamiliar with this sensation since finding their love of{" "}
				<u>{specialty || "specialty"}</u>, their heart began to <u>{presentV1 || "presentVerb"}</u>.
			</p>
			<p>
				As <u>{wizardName || "name"}</u> was caught in this moment, and the new passer-by a perfect
				distraction, <u>{petName || "name"}</u> was able to <u>{adv || "adverb"}</u> lead{" "}
				<u>{wizardName || "name"}</u> away.{" "}
			</p>
			<p>
				By the time they reached the <u>{place1 || "place"}</u>, the wizard was{" "}
				<u>{emotion || "emotion"}</u>. Never before had they experienced their excitement for{" "}
				<u>{specialty || "specialty"}</u> in such a way. They looked at the <u>{noun1 || "noun"}</u> and{" "}
				<u>{noun2 || "noun"}</u>, the supposed wonders of this raved about spot, and thought “
				<u>{phrase2 || "phrase"}</u>”
			</p>
			<p>
				<u>{petName || "name"} {pastV3 || "pastTenseVerb"} {wizardName || "name"}</u> on the back,
				and they both spent the rest of their journey <u>{presentV2 || "presentVerb"}</u>.
			</p>
		</div>
	);
};

export default Story;
