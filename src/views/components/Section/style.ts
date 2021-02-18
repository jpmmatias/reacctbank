import styled from 'styled-components';

interface sectionProps {
	background: 'purple' | 'gray' | 'image';
	backgroundImage?: string;
}

export const Section = styled.section<sectionProps>`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-image: ${(props) =>
		props.backgroundImage !== undefined ? `url(${props.backgroundImage})` : ''};
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-color: ${(props) =>
		props.background === 'purple' ? '#8C52E5' : '#EAEAEA'};
	header {
		height: 10%;
		width: 100%;
		img {
			width: auto;
			height: 100%;
			margin-top: 52px;
			margin-left: 62px;
		}
	}
	.main {
		display: flex;
		justify-content: space-around;
		height: 70%;
		z-index: -1;
		.callToAction {
			z-index: 3;
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 281px;
			p {
				color: #fff;
				font-size: 26px;
				margin-bottom: 39px;
			}
		}
		.form {
			z-index: 3;
			margin: auto 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 349px;
			height: 461.23px;
		}
	}
	.secondSection {
		display: flex;
		height: 100%;
		.phoneSection {
			flex: 1;
			height: 100%;
			&:first-of-type {
				color: #68de5a;
				background-color: black;
				h1 {
					margin-top: 50px;
					text-align: center;
					font-size: 34px;
					font-weight: 500;
				}
				img {
					width: 70%;
					height: auto;
				}
				.paragraphwrapper {
					width: 459px;
					margin: 0 auto;
					p {
						font-size: 18px;
						font-weight: 400;
						padding-right: 30%;
					}
				}
			}
			&:last-of-type {
				h1 {
					margin-top: 50px;
					text-align: center;
					font-size: 34px;
					font-weight: 500;
					margin-bottom: 25px;
				}
				.imgwrapper {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					img {
						width: 40%;
						height: auto;
						margin-bottom: 25px;
					}
				}

				.paragraphwrapper {
					width: 459px;
					margin: 0 auto;
					margin-top: 14%;
					p {
						font-size: 18px;
						font-weight: 400;
						padding-right: 30%;
					}
				}
			}
		}
	}
	.thirdSection {
		display: flex;
		height: 100%;
		.divisor {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100%;
			&:first-of-type {
				div {
					color: #fff;
					width: 459px;
					h1 {
						font-size: 42px;
						font-weight: 700;
						margin-bottom: 36px;
					}
				}
			}
			&:last-of-type {
				color: #68de5a;
				font-size: 96px;
			}
		}
	}
	.forthSection {
		width: 50%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		div {
			width: 459px;
			color: #fff;
			h1 {
				font-weight: bold;
				font-size: 42px;
				margin-bottom: 36px;
			}
			p {
				font-weight: 500;
				font-size: 23px;
			}
		}
	}
	.lastSection {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
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
				}
				p {
					font-weight: 300;
					font-size: 14px;
					margin-bottom: 15px;
				}
			}
		}
	}
`;
