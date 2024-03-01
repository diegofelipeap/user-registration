import styled from 'styled-components'
import Background from '../../assets/background1.svg'


export const Container = styled.div`
    background: url("${Background}");
    background-size:cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;

`
export const Image = styled.img`
    margin-top: 30px;

`
export const InputLabel = styled.p`
    font-style: normal;
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    color: #EEEEEE;
    margin-left: 25px;

`
export const Input = styled.input`
    border-radius: 14px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    outline: none;
    border: none;
    background: rgba(255, 255, 255, 0.25);
    width: 342px;
    height: 58px;
    padding-left: 25px;
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    line-height: 28px;
    margin-bottom: 25px;

`