import { OpenAIModel } from "../../../types/Models";
import {
	commonChatPrompt,
	commonDocPrompt,
	commonRefactorPrompt,
} from "../../common";

export class GPT4Turbo implements OpenAIModel {
	get CodeCompletionPrompt(): string {
		return `Fill in the following text.
		Do not include the original text in your response, just the middle portion.
		{beginning} <FILL_HOLE> {ending}`;
	}

	get ChatPrompt(): string {
		return commonChatPrompt;
	}

	get genDocPrompt(): string {
		return commonDocPrompt;
	}

	get refactorPrompt(): string {
		return commonRefactorPrompt;
	}
}
