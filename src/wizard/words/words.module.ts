import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { WordsController } from "./words.controller";
import { WordsMiddleware } from "./words.middleware";
import { WordsService } from "./words.service";
@Module({
	controllers: [WordsController],
	providers: [WordsService],
})
export class WordsModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(WordsMiddleware).forRoutes({path: '/wizard/words/:type', method: RequestMethod.GET})
	}
}
