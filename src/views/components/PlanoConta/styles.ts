import styled from 'styled-components';

export const Container = styled.div`
	width: 50%;

	@media (max-width: 1024px) {
		width: 90%;
	}
	@media (max-width: 414px) {
		width: 100% !important;
	}

	form {
		display: flex;
		flex-direction: row;
		margin-top: 25px;
		@media (max-width: 1024px) {
			flex-direction: column;
		}

		div {
			display: flex;
			flex-direction: column;
			margin-right: 30px;
			width: 45%;
			@media (max-width: 1024px) {
				width: 100%;
			}

			label {
				margin-bottom: 10px;
			}

			select {
				height: 30px;
			}
		}

		button {
			width: 100px;
			height: 50px;
			border-radius: 15px;
			background-color: #8c52e5;
			border: 1px;
			color: #fff;
			@media (max-width: 1024px) {
				margin: 10% auto;
				width: 80%;
			}

			&:hover {
				background-color: #7545c1;
			}
		}

		input {
			font-weight: 10;
			width: 100%;
		}
	}

	ul {
		margin-top: 15px;
		list-style: none;

		li {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 25px;
			margin-bottom: 10px;
			p {
				margin-right: 20px;
			}
			@media (max-width: 1024px) {
				font-size: 20px;
			}
			@media (max-width: 414px) {
				font-size: 14px;
			}
		}
	}
`;
