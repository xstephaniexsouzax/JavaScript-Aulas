import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button `

    background: #565656;
    boder-radius : 22px;
    position: relative;

    color : #fff;
    padding: 2px 12px;
    min-width : 120px;
    width: 100%;

    ${({variant}) => variant !== "primary" && css `
    min-width: 167px;
    heitht: 33px;

    bacground: #e41050;

    $::after {
        content :'';
        position: absolute;
        boder : 1px solid #e41050;
        top: -5px;
        left: -6px;
        width: calc (100% + 10px);
        heigth: calc (100% + 10px);
        boder-radius:22px;
        
    }
    
    `} 

`
    


      