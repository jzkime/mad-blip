import { Test, TestingModule } from "@nestjs/testing";
import { WizardController } from "./wizard.controller";

describe("WizardController", () => {
	let mainController: WizardController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [WizardController],
		}).compile();

		mainController = module.get<WizardController>(WizardController);
	});

	it("should be defined", () => {
		expect(mainController).toBeDefined();
	});
});
