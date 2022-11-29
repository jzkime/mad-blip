import { Module } from "@nestjs/common";
import { WizardController } from "./wizard.controller";
import { WordsModule } from "./words/words.module";
import { RouterModule } from "@nestjs/core";

@Module({
	imports: [
		WordsModule,
		RouterModule.register([
			{
				path: "/wizard",
				module: WizardModule,
				children: [{ path: "/words", module: WordsModule }],
			},
		]),
	],
	controllers: [WizardController],
})
export class WizardModule {}
