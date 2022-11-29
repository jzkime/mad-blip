exports.up = function (knex) {
	return knex.schema
		.createTable("word_types", (tbl) => {
			tbl.increments("wordtype_id");
			tbl.string("word_type");
		})
		.createTable("words", (tbl) => {
			tbl.increments("word_id");
			tbl.string("word");
			tbl.int("word_type").references("type_id").inTable("word_types");
		})
		.createTable("subject_types", (tbl) => {
			tbl.increments("subtype_id");
			tbl.string("subject_type");
		})
		.createTable("subjects", (tbl) => {
			tbl.increments("sub_id");
			tbl.string("subject_name");
			tbl.int("sub_type").references("subtype_id").inTable("subject_types");
		})
		.createTable("phrases", (tbl) => {
			tbl.increments("phrase_id");
			tbl.string("phrase");
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists("phrases")
		.dropTableIfExists("subjects")
		.dropTableIfExists("subject_types")
		.dropTableIfExists("words")
		.dropTableIfExists("word_types");
};
