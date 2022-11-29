exports.seed = async function (knex) {
	await knex("subject_types")
		.truncate()
		.insert([
			{ subtype_id: 1, subject_type: "name" },
			{ subtype_id: 2, subject_type: "specialty" },
			{ subtype_id: 3, subject_type: "timeOfDay" },
			{ subtype_id: 4, subject_type: "timeOfYear" },
			{ subtype_id: 5, subject_type: "clothing" },
			{ subtype_id: 6, subject_type: "emotion" },
		]);
};
