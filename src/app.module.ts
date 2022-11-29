import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { KnexModule } from "nest-knexjs";
import { WordsModule } from "./words/words.module";
import { SubjectsModule } from "./subjects/subjects.module";

@Module({
	imports: [
		WordsModule,
		SubjectsModule,
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
