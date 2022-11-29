import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { SubjectsController } from "./subjects.controller";
import { SubjectsMiddleware } from "./subjects.middleware";
import { SubjectsService } from "./subjects.service";
@Module({
	controllers: [SubjectsController],
	providers: [SubjectsService],
})
export class SubjectsModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(SubjectsMiddleware)
			.forRoutes({ path: "/subjects/:type", method: RequestMethod.GET });
	}
}
