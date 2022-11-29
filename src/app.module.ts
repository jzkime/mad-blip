import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { KnexModule } from "nest-knexjs";
import { WizardController } from "./wizard/wizard.controller";
import { WizardService } from "./wizard/wizard.service";

@Module({
	imports: [
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
	controllers: [AppController, WizardController],
	providers: [AppService, WizardService],
})
export class AppModule {}
