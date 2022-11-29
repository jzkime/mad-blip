exports.seed = async function(knex) {
  await knex('word_types').truncate().insert([
    {wordtype_id: 1, word_type: 'adjective'},
    {wordtype_id: 2, word_type: 'adverb'},
    {wordtype_id: 3, word_type: 'nounThing'},
    {wordtype_id: 4, word_type: 'nounThingPlural'},
    {wordtype_id: 5, word_type: 'nounPlace'},
    {wordtype_id: 6, word_type: 'nounAnimal'},
    {wordtype_id: 7, word_type: 'verbPast'},
    {wordtype_id: 8, word_type: 'verbPresent'},
  ]);
};
