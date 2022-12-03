import React from "react";
import { Button } from "../button";
import Logo  from '../../foto/dio.png'

import {
    Container,
    BuscarContainer,
    Row,
    //Column,
    wrapper,
    Menu,
    MenuRight,
    //UserPicture,
    Input
} from './styles' 


const Header = () => {
    return (
       <wrapper>
            <Container>
                <Row>
                    <img src={Logo} alt= "Logo da dio"/>
                    <BuscarContainer>
                        <Input placeholder="Buscar ..."/>
                    </BuscarContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                </Row>
            </Container>
       </wrapper>
    )
}

export {Header}