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