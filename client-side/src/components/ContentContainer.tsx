import React, { useState } from "react";
import Story from "./Story";
import StoryPrompts from "./StoryPrompts";
import { words, initialWords } from '../interfaces'
/**
 * Todo:
 *  Button: generate call to backend that will fetch random words
 *  Story Component: pass in words
 *  Button: Clear inputs
 */

function ContentContainer() {
	const [currentWords, setCurrentWords] = useState<words>(initialWords);
	return (
		<section id="content-container">
			<StoryPrompts />
			<Story currentWords={currentWords} />
		</section>
	);
}

export default ContentContainer;
