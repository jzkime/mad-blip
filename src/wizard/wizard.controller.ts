import { Controller, Get } from "@nestjs/common";
import { WizardService } from "./wizard.service";

@Controller("wizard")
export class WizardController {
	constructor(private readonly wizardService: WizardService) {}
	@Get()
	getMagic() {
       return this.wizardService.sayMagic();
    };
}
