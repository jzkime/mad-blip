# Backend!
NestJs database, using Knex and nest-knexjs

## endpoints:
### Words
> `/words`
Returns the entire words table in the database

> `/words/:type` (number) && `/words/#?limit=`
Returns random words of the specified type
Limit defaults to 1

### Subjects
> `/subjects`
Returns the entire subjects table in the database

> `/subjects/:type` (number) && `/subjects/:type?limit=`
Returns random subject data with the corresponding /:type
Limit defaults to 1

### Phrases
> `/phrases`
Returns entire phrases table from the database

> `/phrases/random && /phrases/random?limit=`
Returns random phrase data from database
Limit defaults to 1

### Created By
Jazmine Kime
