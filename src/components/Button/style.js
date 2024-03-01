import styled from 'styled-components'

export const Button = styled.button`
    background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'}; 
    width: 342px;
    height: 74px;
    border-radius: 14px;
    margin-top: 120px;
    font-size: 17px;
    font-weight: 700;
    line-height: 28px;
    color: #FFFFFF;
    border: ${props => props.isBack ? '1px solid #FFF' : 'none'};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover{ opacity:0.9; } 
    &:active{ background: #000; } 

    img{
        transform: ${props => props.isBack && 'rotateY(180deg)'};
    }

`