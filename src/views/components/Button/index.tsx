import React from 'react';
import { ButtonContainer } from './style';
import { Link } from 'react-router-dom';

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
