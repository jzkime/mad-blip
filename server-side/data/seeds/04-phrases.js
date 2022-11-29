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
		]);
};
