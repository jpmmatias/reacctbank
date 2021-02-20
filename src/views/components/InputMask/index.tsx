import React from 'react';
import { mask as masker, unMask } from 'remask';
import { Input, InputMessage } from '../../pages/Home/style';



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
	isInvalid:string;
	handleChange:Function;
	onChangeM: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const handleChange = (e: any) => {
		const originalValue = unMask(e.target.value);
		props.handleChange(originalValue, name, onChangeM)
		
	};

	const handleValue = masker(value, mask);
	

	return (
		<InputMessage>
			<Input
				{...props}
				onChange={handleChange}
				placeholder={placeholder}
				value={handleValue}
				isInvalid={props.isInvalid}
			/>
			<p>{props.isInvalid}</p>
		</InputMessage>
	);
};
