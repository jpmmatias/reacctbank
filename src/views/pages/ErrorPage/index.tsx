import React from 'react';
import logo from '../../../assets/images/logo.svg';
import warning from '../../../assets/images/warning.png'
import SectionHome from '../../components/Section';
import CardError from '../../components/CardError';
import Button from '../../components/Button';
import arrowIcon from '../../../assets/icons/right-arrow 1.svg';

const ErrorPage = () => {
    return (
        <>
            <SectionHome background="purple">
                <header>
                    <img src={logo} alt='Gama Academy' />
                </header>
                <div className="main">
                    <div className="form">

                        <CardError>
                            <img className="img-error" src={warning} alt='algo errado' />
                           
                            <h3 className="subtitulo-error">Oops, algo deu errado! Confirme seus dados e tente novamente!</h3>
                            <Button
                                text='Voltar'
                                LinkTo='/'
                                textColor='white'
                                textSize={17}
                                textWeight={500}
                                backgroundColor='#68DE5A'
                                icon={arrowIcon}
                                widthSize={276.74}
                                heightSize={47.66}
                            ></Button>
                        </CardError>
                    </div>
                </div>
            </SectionHome>
        </>
    )
}
export default ErrorPage;