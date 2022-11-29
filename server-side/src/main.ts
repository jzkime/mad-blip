import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const PORT = process.env.PORT || 9000;

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
		origin: true,
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
		allowedHeaders: "XMLHttpRequest, Access-Control-Allow-Origin",
		credentials: true,
	});
	await app.listen(PORT);
}
bootstrap();
