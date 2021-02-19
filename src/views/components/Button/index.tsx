import React from 'react';
import { ButtonContainer } from './style';
import { Link } from 'react-router-dom';
import { type } from 'os';

interface ButtonProps {
	text: string;
	textColor: string;
	textSize: number;
	icon?: string;
	backgroundColor: string;
	widthSize: number;
	heightSize: number;
	textWeight?: number;
	LinkTo?: string;
	type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button = ({
	text,
	textColor,
	textSize,
	icon,
	backgroundColor,
	widthSize,
	heightSize,
	textWeight,
	LinkTo,
	type,
}: ButtonProps) => {
	if (LinkTo) {
		return (
			<Link style={{ textDecoration: 'none' }} to={LinkTo}>
				<ButtonContainer
					backgroundColor={backgroundColor}
					width={widthSize}
					height={heightSize}
					textColor={textColor}
					textSize={textSize}
					textWeight={textWeight}
					icon={icon}
					type={type !== undefined ? type : 'button'}
				>
					<span className='text'>{text}</span>
					{icon && (
						<span className='icon'>
							<img src={icon} alt='Icone' aria-hidden='true' />
						</span>
					)}
				</ButtonContainer>
			</Link>
		);
	}

	return (
		<ButtonContainer
			backgroundColor={backgroundColor}
			width={widthSize}
			height={heightSize}
			textColor={textColor}
			textSize={textSize}
			textWeight={textWeight}
			icon={icon}
			type='submit'
		>
			<span className='text'>{text}</span>
			{icon && (
				<span className='icon'>
					<img src={icon} alt='Icone' aria-hidden='true' />
				</span>
			)}
		</ButtonContainer>
	);
};

export default Button;
