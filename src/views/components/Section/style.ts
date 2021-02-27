import styled from 'styled-components';

interface sectionProps {
	background: 'purple' | 'gray' | 'image';
	backgroundImage?: string;
}

export const Container = styled.section<sectionProps>`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-image: ${(props) =>
		props.backgroundImage !== undefined ? `url(${props.backgroundImage})` : ''};
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-color: ${(props) =>
		props.background === 'purple' ? '#8C52E5' : '#EAEAEA'};

	header {
		height: 10%;
		margin: 30px 45px;
		@media (max-width: 618px) {
			margin: 20px 25px;
		}
	}

	.main {
		display: flex;
		justify-content: space-around;
		height: 70%;
		z-index: -1;

		@media (max-width: 618px) {
			display: flex;
			flex-direction: column;
			align-items: center;
			height: auto;
		}

		.callToAction {
			z-index: 3;
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 281px;
			margin-bottom: 4%;

			p {
				color: #fff;
				font-size: 26px;
				margin-bottom: 12px;
			}

			@media (max-width: 618px) {
				width: auto;
				p {
					font-size: 18px;
					margin-bottom: 4px;
				}
			}
		}

		.form {
			z-index: 3;
			margin: auto 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 349px;
			height: 400px;
			@media (max-width: 1024px) {
				width: 300px;
				height: 70%;
				margin: 0;
			}
			@media (max-width: 618px) {
				width: 70%;
				div {
					margin-bottom: 15px;
				}
			}
		}
	}

	.secondSection {
		display: flex;
		height: 100%;

		@media (max-width: 1024px) {
			display: flex;
			flex-direction: column;
			.phoneSection {
				height: 50%;
				&:first-of-type {
					h1 {
						font-size: 28px !important;
						margin: 1rem 0 !important;
					}
					img {
						height: 150px !important;
						width: 150px !important;
					}
				}

				&:last-of-type {
					h1 {
						font-size: 28px !important;
						margin: 1rem 0 !important;
					}
					img {
						height: 150px !important;
						width: 150px !important;
					}
				}

				p {
					font-size: 1.1em;
					margin-bottom: 20px;
				}
			}
		}

		.phoneSection {
			flex: 1;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			&:first-of-type {
				color: #68de5a;
				background-color: black;

				h1 {
					text-align: center;
					font-size: 34px;
					font-weight: 500;
					margin: 3rem 3rem 3rem 7rem;
				}

				img {
					height: 350px;
					width: 350px;
				}

				.paragraphwrapper {
					/* width: 459px;
					margin: 0 auto; */

					p {
						font-size: 18px;
						font-weight: 400;
						margin-top: 25px;
					}
				}
			}

			&:last-of-type {
				color: #1d1d1d;
				background-color: #f8f8f8;

				h1 {
					text-align: center;
					font-size: 34px;
					font-weight: 500;
					margin: 3rem 3rem 3rem 7rem;
				}

				img {
					height: 350px;
					width: 350px;
				}

				.paragraphwrapper {
					p {
						font-size: 18px;
						font-weight: 400;
						margin-top: 25px;
					}
				}
			}
		}
	}
	.thirdSection {
		display: flex;
		height: 100%;

		@media (max-width: 618px) {
			display: flex;
			flex-direction: column;
			margin-top: 2.5rem;
			text-align: center;
			justify-content: space-around;
			height: 80%;
		}

		.divisor {
			display: flex;
			align-items: center;
			justify-content: space-around;
			width: 100%;

			&:first-of-type {
				div {
					color: #fff;
					h1 {
						font-size: 38px;
						font-weight: 700;
						margin-bottom: 32px;
						text-align: center;
					}
				}
				p {
					font-size: 18px;
					@media (max-width: 618px) {
						padding: 0 10%;
					}
				}
			}

			&:last-of-type {
				color: #68de5a;
				font-size: 86px;
			}
		}
	}

	.forthSection {
		width: 50%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${(props) =>
			props.background === 'gray' ? '#EAEAEA' : '#8C52E5'};
		background-size: cover;
		

		div {
			width: 459px;
			color: #fff;
			h1 {
				font-weight: bold;
				font-size: 42px;
				margin-bottom: 36px;
				padding:0 5%;
				@media (max-width: 618px) {
					font-weight: bold;
					font-size: 32px;;
					margin-bottom: 36px;
					word-break:break-all
				}
			}
		}
			}
			p {
				font-weight: 500;
				font-size: 23px;
				padding:0 5%;
				@media (max-width: 618px) {
					font-size: 18px;
			}
		}
	}
	.lastSection {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		@media (max-width: 618px) {
					flex-direction:column
			}
		.imageWrapper,
		.content {
			width: 100%;
		}
		.imageWrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			img {
				width: 50%;
				height: auto;
			}
		}
		.content {
			display: flex;
			justify-content: center;
			align-items: center;

			.contentWrapper {
				width: 444px;
		
				h1 {
					font-weight: bold;
					font-size: 42px;
					line-height: 49px;
					padding-right: 30px;
					margin-bottom: 15px;
					margin-bottom: 40px;
					padding: 0 5%;
					@media (max-width: 618px) {
				text-align:center;
			
			}
				}
				p {
					font-weight: 300;
					font-size: 14px;
					margin-bottom: 15px;
					padding: 0 5%;
					@media (max-width: 618px) {
			text-align:center;
			}
				}
			}
		}
	}
	.subtitulo {
		text-align: center;
		font-weight: normal;
		margin-bottom: 15px;
	}

	.subtitulo-error {
		color: #8c52e5;
		margin-top: 50px;
		text-align: center;
		font-weight: 500;
		font-size: 23px;
		margin-bottom: 25px;
	}

	.img-error {
		margin-top: 35px;
		margin-left: 80px;
	}
	.link {
		margin-top: 50px;
		text-align: center;
		color: #8c52e5;
		text-decoration: none;
		font-size: 13px;
		line-height: 15, 23px;
	}
	.link2 {
		margin-top: 10px;
		text-align: center;
		color: #8c52e5;
		text-decoration: none;
		font-size: 13px;
		line-height: 15, 23px;
	}
`;
