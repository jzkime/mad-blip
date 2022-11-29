import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { KnexModule } from "nest-knexjs";
import { WizardModule } from "./wizard/wizard.module";

@Module({
	imports: [
		WizardModule,
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
