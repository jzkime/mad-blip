exports.seed = async function (knex) {
	await knex("phrases")
		.truncate()
		.insert([
			{ phrase: "Just a hogwash and a stone throw away." },
			{ phrase: "Yippee Ki-Yay!" },
			{ phrase: "Who am I?" },
			{ phrase: "What excellent boiled potatoes." },
			{ phrase: "What's 'taters', Precious??" },
			{ phrase: "Carpe diem." },
			{ phrase: "May the Force be with you." },
			{ phrase: "My mama always said life was like a box of chocolates." },
			{ phrase: "Just keep swimming." },
			{ phrase: "Hello there." },
			{ phrase: "Fine day for a stroll." },
			{ phrase: "Today is a new day." },
			{ phrase: "This is a new beginning." },
			{ phrase: "I'm going to be better from now on." },
			{ phrase: "I'm perfect just the way I am." },
			{ phrase: "I'm enough." },
			{ phrase: "Nice weather we're having." },
			{ phrase: "For sparta." },
			{ phrase: "How am I supposed to live, laugh, love in these conditions?" },
			{ phrase: "Today I'm the wisest I've ever been." },
		]);
};
