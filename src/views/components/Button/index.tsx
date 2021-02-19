import React from 'react';
import { ButtonContainer } from './style';
import { Link } from 'react-router-dom';

interface ButtonProps {
	text: string;
	textColor: string;
	textSize: number;
	icon?: string;
	backgroundColor: string;
	backgroundColorHover?: string;
	textColorHover?: string;
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
	textColorHover,
	backgroundColorHover,
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
					backgroundColorHover={backgroundColorHover}
					textColorHover={textColorHover}
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
			textColorHover={textColorHover}
			backgroundColorHover={backgroundColorHover}
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
