import type React from "react";
import { FaX } from "react-icons/fa6";
import type { FileSearchResult } from "@shared/types/Composer";

interface FileChipsProps {
	chips: FileSearchResult[];
	onChipRemove: (chip: FileSearchResult) => void;
	isLightTheme: boolean;
}

export const FileChips: React.FC<FileChipsProps> = ({
	chips,
	onChipRemove,
	isLightTheme,
}) => {
	const chipClasses = `${isLightTheme
		? 'bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.15),0_12px_24px_rgba(0,0,0,0.15)] border border-gray-200'
		: 'bg-[#1e1e1e] shadow-[0_2px_4px_rgba(0,0,0,0.2),0_8px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.25),0_12px_24px_rgba(0,0,0,0.25)] border border-gray-700'
		}`;

	if (chips.length === 0) {
		return null;
	}

	return (
		<div className="flex flex-wrap items-center">
			{chips.map((chip, index) => (
				<span
					key={chip.path}
					className={`${chipClasses} rounded-md px-2 py-1 m-1 inline-flex items-center hover:bg-stone-500 hover:border-stone-600 transition-all duration-200 relative group`}
					data-tooltip={chip.path}
				>
					{chip.file}
					<button
						type="button"
						className="ml-1 font-bold text-opacity-70 hover:text-opacity-100"
						onClick={() => onChipRemove(chip)}
					>
						<FaX />
					</button>
					<span className="invisible group-hover:visible absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap p-2 z-10 shadow-md">
						{chip.path}
					</span>
				</span>
			))}
		</div>
	);
};