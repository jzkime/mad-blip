import { Controller, Get } from "@nestjs/common";

@Controller()
export class WizardController {
	@Get()
	getMagic() {
		return "Welcome to the Wizard endpoint!";
	}
}
