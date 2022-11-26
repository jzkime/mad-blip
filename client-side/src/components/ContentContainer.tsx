import React from "react";
import Story from './Story'

/**
 * Todo:
 *  Button: generate call to backend that will fetch random words
 *  Story Component: pass in words
 *  Button: Clear inputs
 */

function ContentContainer() {
	return <section id="content-container">
        <Story />
    </section>;
}

export default ContentContainer;
