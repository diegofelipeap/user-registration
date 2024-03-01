import styled from 'styled-components'

export const ContainerItens = styled.div`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 72vh;

${props => props.isBlur && `
    min-height: calc(75vh - 170px);
    backdrop-filter: blur(45px);
`}
`