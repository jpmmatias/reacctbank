import styled from 'styled-components';

interface ButtonProps {
	textColor: string;
	backgroundColor: string;
	width: number;
	height: number;
	textSize: number;
	textWeight?: number;
	iconColor?: '#9B9B9B';
	icon?: string;
}
export const ButtonContainer = styled.button<ButtonProps>`
	background-color: ${(props) => props.backgroundColor};
	width: ${(props) => props.width + 'px'};
	height: ${(props) => props.height + 'px'};
	border-radius: 20px;
	border-color: none;
  border-color:transparent;
  display:flex;
  justify-content:space-around;
  align-items:center;
  cursor:pointer;
	
	.text {
		font-size: ${(props) => props.textSize + 'px'};
		font-weight: ${(props) =>
			props.textWeight !== undefined ? props.textWeight : 500};
		color: ${(props) => props.textColor};
	}
	.icon {
		width: 30px;
		height: 30px;
    padding-left:30px;
		filter: ${(props) => {
			switch (props.iconColor) {
				case '#9B9B9B':
					return 'filter: invert(69%) sepia(15%) saturate(4%) hue-rotate(314deg) brightness(86%) contrast(91%);';
				default:
					return '';
			}
		}}
`;
