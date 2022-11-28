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
		destination,
		home,
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
				Once upon a time, there lived a <b>{creature1 || "creature"}</b> named{" "}
				<b>{petName || "name"}</b>. {petName || "name"} was the loved friend of a{" "}
				{adj1 || "adj"} wizard named {wizardName || "name"}. While the beginning of this
				story seems rather focused on the {creature1 || "creature"}, this story is indeed
				about this magic folk. Unlike any small town wizard that you might have heard of,
				this wizard was best known for their proficiency in {specialty || "specialty"}, in
				which they were entirely masterful. However, this fixed admiration would sometimes
				be to their own detriment, as they would be so happy partaking in this hobby, that
				they would hardling think of anything else.
			</p>
			<p>
				Now, back to {petName || "name"}. {petName || "name"} decided one day to venture out
				and bring their friend to a lovely little {destination || "place"} deep in the
				forest that the other creatures in the land loved to boast about. It was said to be
				a marvel, filled with {noun1 || "noun"} and {noun2 || "noun"} that one could never
				stop staring at, for as soon as they stepped into the vicinity, they were
				immediately enthralled in the wonder of the {destination || "place"}.
			</p>
			<p>
				For this journey, {petName || "name"} packed up several {noun3}, and at the last
				moment ({timeOfDay || "time"}) they were finally able to drag {wizardName || "name"}{" "}
				outside and to their adventure.
			</p>
			<p>
				Now, the trail from their {home || "home"} to the {destination || "place"} was{" "}
				{adj2 || "adj"}, where beings of magic and trickery would appear out of seemingly
				nowhere, and do anything to get an unfortunate traveler's attention. One such being,
				a {creature2 || "creature"}, {pastV1 || "pastTenseVerb"}
				out in front of our heroes, and said to them “{phrase1 || "phrase"}”.
			</p>
			<p>
				Having no idea how to respond to this, {wizardName || "name"} simply{" "}
				{pastV2 || "pastTenseVerb"}. The creature continued to rattle on, and not soon
				after, the wizard was pleased to realize that, since they had not left their{" "}
				{home || "home"} since {timeOfYear || "timeOfYear"} and since they had never seen
				this creature before, that meant that this sorry foe most likely had never heard
				about their love of {specialty || "specialty"} before.
			</p>{" "}
			<p>
				Oh, how {wizardName || "name"} delighted in their {specialty || "specialty"}{" "}
				anecdotes. They were enthralled in the ever careful art they loved so dearly, and
				despite {petName || "name"} constantly tugging on their {outfit || "outfit"} they
				would not stop.{" "}
			</p>
			<p>
				As the story continued, the wizard began to notice the {creature2 || "creature"} was
				peering elsewhere, and had spotted another unsuspecting victim, to which their
				talons of social entrapment were now being aimed. This made {wizardName || "name"}’s
				enthusiasm waver. Unfamiliar with this sensation since finding their love of{" "}
				{specialty || "specialty"}, their heart began to {presentV1 || "presentVerb"}.
			</p>
			<p>
				As {wizardName || "name"} was caught in this moment, and the new passer-by a perfect
				distraction, {petName || "name"} was able to {adv || "adverb"} lead {wizardName || "name"} away.{" "}
			</p>
			<p>
				By the time they reached the {destination || "place"}, the wizard was{" "}
				{emotion || "emotion"}. Never before had they experienced their excitement for{" "}
				{specialty || "specialty"} in such a way. They looked at the {noun1 || "noun"} and{" "}
				{noun2 || "noun"}, the supposed wonders of this raved about spot, and thought “
				{phrase2 || "phrase"}”.{" "}
			</p>
			<p>
				{petName || "name"} {pastV3 || "pastTenseVerb"} {wizardName || "name"} on the back,
				and they both spent the rest of their journey {presentV2 || "presentVerb"}.
			</p>
		</div>
	);
};

export default Story;
