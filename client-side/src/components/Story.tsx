import React from "react";
import { words } from "../interfaces";
// Story written by jzkime

interface PropWords {
	currentWords: words;
}

const Story: React.FC<PropWords> = ({ currentWords }) => {
	const { names, creatures, ad, nouns, verbs, misc } = currentWords;
	const { petName, wizardName } = names;
	const { creature1, creature2 } = creatures;
	const {
		adj: [adj1, adj2],
		adv,
	} = ad;
	const [noun1, noun2, noun3] = nouns;
	const {
		pastTense: [pastV1, pastV2, pastV3],
		present: [presentV1, presentV2],
	} = verbs;
	const {
		specialty,
		places: { destination, home },
		times: { ofDay, ofYear },
		phrases: [phrase1, phrase2],
		outfit,
		emotion,
	} = misc;

	return (
		<div id="story-container">
			<p>
				Once upon a time, there lived a <b>{creature1 || "creature"}</b> named{" "}
				<b>{petName || "name"}</b>. {petName || "name"} was the loved friend of a{" "}
				{adj1 || "adj"} wizard named {wizardName || "name"}. While the beginning of this
				story seems rather focused on the {creature1 || "creature"}, this story is indeed
				about this magic folk. Unlike any small town wizard that you might have heard of,
				this wizard was best known for their proficiency in {specialty || "specialty"}, in
				which they were entirely masterful. However, this fixed admiration would sometimes
				be to their own detriment, as they would be so happy partaking in this hobby, that
				they soon began to not think of anything else.
			</p>
			<p>
				Now, back to {petName || "name"}. {petName || "name"} decided one day to venture out
				and bring their friend to a lovely little {destination || "place"} deep in the
				forest that they had heard about from the other creatures in the land. It was said
				to be a marvel, filled with {noun1 || "noun"} and {noun2 || "noun"} that one could
				never stop staring at, for as soon as they stepped into the vicinity, they were
				immediately enthralled in the wonder of the {destination || "place"}.
			</p>
			<p>
				{petName || "name"} packed up several {noun3} for the journey, and at the last
				moment ({ofDay || "time"}) they were finally able to drag {wizardName || "name"}{" "}
				outside and to their adventure.
			</p>
			<p>
				Now, the trail from their {home || "home"} to {destination || "place"} was{" "}
				{adj2 || "adj"}, where beings of magic and trickery would appear out of seemingly
				nowhere, and do anything to get an unfortunate traveler's attention. One such being,
				a {creature2 || "creature"}, {pastV1 || "pastTenseVerb"}
				out in front of our heroes, and said to them “{phrase1 || "phrase"}”.
			</p>
			<p>
				Having no idea how to respond to this, {wizardName || "name"} simply{" "}
				{pastV2 || "pastTenseVerb"}. The creature continued to rattle on, and not soon
				after, the wizard was pleased to realize that, since they had not left their{" "}
				{home || "home"} since {ofYear || "timeOfYear"} and since they had never seen this
				creature before, then that meant that this sorry foe most likely had never heard
				about {specialty || "specialty"}before.
			</p>{" "}
			<p>
				Oh, how {wizardName || "name"} delighted in their storytelling of{" "}
				{specialty || "specialty"}. They were enthralled in the ever careful art they loved
				so dearly, and despite {petName || "name"} constantly tugging on their{" "}
				{outfit || "outfit"} they would not stop.{" "}
			</p>
			<p>
				However, as the story continued, the wizard noticed the creature had spotted another
				unsuspecting victim, to which their talons of social entrapment were now being aimed
				in another direction. This made {wizardName || "name"}’s enthusiasm waver.
				Unfamiliar with this sensation since finding their love of this hobby, their heart
				began to
				{presentV1 || "presentVerb"}.
			</p>
			<p>
				As {wizardName || "name"} was caught in this moment, and the new passer-by a perfect
				distraction, {petName || "name"} was able to {adv || "adverb"} lead wizardName away.{" "}
			</p>
			<p>
				By the time they reached {destination || "place"}, the wizard was{" "}
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
