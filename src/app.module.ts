import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { KnexModule } from "nest-knexjs";
import { WordsModule } from "./words/words.module";
import { SubjectsModule } from "./subjects/subjects.module";
import { PhrasesModule } from "./phrases/phrases.module";

@Module({
	imports: [
		WordsModule,
		SubjectsModule,
		PhrasesModule,
		KnexModule.forRootAsync({
			useFactory: () => ({
				config: {
					useNullAsDefault: true,
					client: "sqlite3",
					connection: {
						filename: "./data/wordsDB.sqlite3",
					},
				},
			}),
		}),
	],
	controllers: [AppController],
})
export class AppModule {}
