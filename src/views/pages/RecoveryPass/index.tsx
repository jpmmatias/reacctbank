import React from 'react';
import logo from '../../../assets/images/logo.svg';
import SectionHome from '../../components/Section';
import Card from '../../components/Card';
import Button from '../../components/Button';
import arrowIcon from '../../../assets/icons/right-arrow 1.svg';

const RecoveryPass = () => {
    return (
        <>
            <SectionHome background="purple">
                <header>
                    <img src={logo} alt='Gama Academy' />
                </header>
                <div className="main">
                    <div className="form">
                        <Card>
                            <form>
                                <h2 className='homeFormTitle'>
                                    Esqueci Minha Senha
                                </h2>
                                <h6 className="subtitulo">Confirme seu cpf e escolha sua nova senha</h6>
                                <input type="text" placeholder="Confirme seu cpf" name="username" id="username" />
                                <input type="password" placeholder="Digite sua nova senha" name="password" id="password" />
                                <input type="password" placeholder="Confirme sua nova senha" name="password" id="password"/>
                                <Button
                                    text='Enviar'
                                    textColor='white'
                                    textSize={17}
                                    textWeight={500}
                                    backgroundColor='#68DE5A'
                                    icon={arrowIcon}
                                    widthSize={276.74}
                                    heightSize={47.66}
                                ></Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </SectionHome>
        </>
    )

};

export default RecoveryPass;