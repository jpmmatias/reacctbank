import styled from 'styled-components';

export const Container = styled.div`
	width: 50%;
	height: 50%;

	@media (max-width: 414px) {
		width: 100%;
		height: 100%;
	}

	form {
		display: flex;
		flex-direction: row;
		margin-top: 25px;

		@media (max-width: 414px) {
			flex-direction: column;
		}

		div {
			display: flex;
			flex-direction: column;
			margin-right: 30px;
			width: 45%;

			label {
				margin-bottom: 10px;
			}

			select {
				height: 30px;
				@media (max-width: 414px) {
					margin-bottom: 4%;
				}
			}

			@media (max-width: 414px) {
				width: 100%;
			}
		}

		button {
			width: 100px;
			height: 50px;
			border-radius: 15px;
			background-color: #8c52e5;
			border: 1px;
			color: #fff;

			&:hover {
				background-color: #7545c1;
			}
		}

		input {
			font-weight: 10;
			width: 100%;
		}
	}
`;
