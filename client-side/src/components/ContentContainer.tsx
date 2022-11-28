import React, { useState } from "react";
import Story from "./Story";
import StoryPrompts from "./StoryPrompts";
import { AllWords, initialWords } from '../interfaces'
/**
 * Todo:
 *  Button: generate call to backend that will fetch random words
 *  Story Component: pass in words
 *  Button: Clear inputs
 */

function ContentContainer() {
	const [currentWords, setCurrentWords] = useState<AllWords>(initialWords);
	return (
		<section id="content-container">
			<StoryPrompts currentWords={currentWords} setCurrentWords={setCurrentWords} />
			<Story currentWords={currentWords} />
		</section>
	);
}

export default ContentContainer;
