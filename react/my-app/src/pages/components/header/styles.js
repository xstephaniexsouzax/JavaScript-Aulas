import styled from "styled-components";







export const Container = styled.div `
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    aling-items: center 
    margin: 0 auto;
`


export const BuscarContainer = styled.div `
    width: 175px;
    height: 30px;
    backgound: #202037;
    boder-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    align-itens: center;

`

export const Column = styled.div `
    display: flex;
    flex-direction: column;
    align-itens: center;
    
`

export const wrapper = styled.div `
    backgroud-color: #151515;
    width: 100%;
    heigth: 47px;
    display: flex;
    justify-content: center;
    align-itens:center

`
export const Menu = styled.a `
    font-family: 'Open Sans',
    font-style: normal;
    font-siza: 12px;
    line-height:25px;
    color: #ffffff;
    margin-right: 12px;
    text-decoration: none;

`

export const MenuRight = styled.a `
    font-family: 'Open Sans',
    font-style: normal;
    font-siza: 12px;
    line-height:25px;
    color: #ffffff;
    margin-right: 12px;
    text-decoration: none;

`
export const UserPicture = styled.img `
    width: 32px;
    height: 32px;
    boder-radius: 22px;
    boder: 2px solid #ffffff;
`

export const Input = styled.input `
    background : transparent;
    flex: 1;
    boder: 0;
    color : #ffffff
`
