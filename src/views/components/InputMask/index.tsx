import React from 'react';
import { mask as masker, unMask } from 'remask';

export const InputMask = ({
	mask,
	onChangeM,
	value,
	placeholder,
	type,
	name,
	...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
	mask: string[];
	onChangeM: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const handleChange = (e: any) => {
		const originalValue = unMask(e.target.value);
		onChangeM(originalValue);
	};

	const handleValue = masker(value, mask);

	return (
		<input
			{...props}
			onChange={handleChange}
			placeholder={placeholder}
			value={handleValue}
		/>
	);
};
