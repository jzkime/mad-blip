# Backend!
NestJs database, using Knex and nest-knexjs

## endpoints:
### Words
> `/words`<br/>
Returns the entire words table in the database<br/>

> `/words/:type` (number) && `/words/#?limit=`<br/>
Returns random words of the specified type<br/>
Limit defaults to 1<br/>

### Subjects
> `/subjects`<br/>
Returns the entire subjects table in the database<br/>

> `/subjects/:type` (number) && `/subjects/:type?limit=`<br/>
Returns random subject data with the corresponding /:type<br/>
Limit defaults to 1<br/>

### Phrases
> `/phrases`<br/>
Returns entire phrases table from the database<br/>

> `/phrases/random && /phrases/random?limit=`<br/>
Returns random phrase data from database<br/>
Limit defaults to 1<br/>

### Created By
Jazmine Kime
