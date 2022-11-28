import React, { useState } from "react";
import Story from "./Story";
import StoryPrompts from "./StoryPrompts";
import { AllWords, initialWords } from "../interfaces";
/**
 * Todo:
 *  Button: generate call to backend that will fetch random words
 *  Story Component: pass in words
 *  Button: Clear inputs
 */

function ContentContainer() {
	const [currentWords, setCurrentWords] = useState<AllWords>(initialWords);
	const [isStoryHidden, setIsStoryHidden] = useState<boolean>(true);
	return (
		<section id="content-container">
			<StoryPrompts currentWords={currentWords} setCurrentWords={setCurrentWords} />
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
}

export default ContentContainer;
