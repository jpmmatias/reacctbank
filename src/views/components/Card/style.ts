import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	background-color: #fbfbfb;
	border-radius: 8px;
	box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
	padding: 25px 37px;
	.homeFormTitle {
		font-size: 19px;
		font-weight: 700;
		margin-bottom: 30px;
		text-align: center;
	}
	form {
		display: flex;
		flex-direction: column;
		input {
			border: none;
			border-bottom: 1px solid #878686;
			background: none;
			padding: 5px;
			font-weight: 600;
			margin-bottom: 30px;
			&::placeholder {
				font-size: 12px;
				color: #878686;
				font-weight: 500;
			}
		}
	}
`;
