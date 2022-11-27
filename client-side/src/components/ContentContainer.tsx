import React from "react";
import Story from './Story'
import StoryPrompts from "./StoryPrompts";

/**
 * Todo:
 *  Button: generate call to backend that will fetch random words
 *  Story Component: pass in words
 *  Button: Clear inputs
 */

function ContentContainer() {
	return <section id="content-container">
        <StoryPrompts />
        <Story />
    </section>;
}

export default ContentContainer;
