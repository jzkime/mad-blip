import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { WordTypes } from "src/interfaces";
@Injectable()
export class WordsMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		if (WordTypes[req.params.type]) next();
		else return res.status(404).send("invalid type");
	}
}
