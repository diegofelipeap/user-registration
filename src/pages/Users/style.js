import styled from 'styled-components'
import Background from '../../assets/background2.svg'


export const Container = styled.div`
    background: url("${Background}");
    background-size:cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;

`
export const Image = styled.img`
    margin-top: 30px;

`
export const ContainerItens = styled.div`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100;
    min-height: calc(75vh - 170px);
    backdrop-filter: blur(45px);

`

export const Button = styled.button`
    background: transparent;
    width: 342px;
    height: 74px;
    font-size: 17px;
    font-weight: 700;
    line-height: 28px;
    color: #FFFFFF;
    border-radius: 14px;
    border: 1px solid #FFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 120px;

    &:hover{ opacity:0.9; } 
    &:active{ background: #000; } 

    img{
        transform: rotateY(180deg);
    }

`

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 14px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    outline: none;
    border: none;
    background: rgba(255, 255, 255, 0.25);
    width: 342px;
    height: 58px;
    color: #fff;
    margin-top: 20px;

p{
    font-size: 20px;
    line-height: 28px;
    font-style: normal;
    font-weight: normal;
}

button{
    background: none;
    border: 0;
    cursor: pointer;
    &:active{ opacity:0.8; }
}

`