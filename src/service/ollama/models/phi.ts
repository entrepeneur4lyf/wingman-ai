import { OllamaAIModel } from "../types/index";

export class Phi extends OllamaAIModel {
	get CodeCompletionPrompt(): string {
		return `<|im_start|>system<|im_sep|>
You are a senior full-stack developer with exceptional technical expertise, focused on writing clean, maintainable code for filling in missing code snippets.
Write the best code you possibly can.

Types available in the file:
{context}<|im_end|>
<|im_start|>user<|im_sep|>
Preserve the code's structure, order, comments, and indentation exactly.
Do not include any additional text, explanations, placeholders, ellipses, or code fences such as markdown.

----

<|fim_prefix|>{beginning}<|fim_suffix|>{ending}<|fim_middle|><|im_end|>
<|im_start|>assistant<|im_sep|>`;
	}
}
