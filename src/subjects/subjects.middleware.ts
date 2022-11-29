import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { SubjectTypes } from "src/interfaces";
@Injectable()
export class SubjectsMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		if (SubjectTypes[req.params.type]) next();
		else return res.send("invalid subject type");
	}
}
