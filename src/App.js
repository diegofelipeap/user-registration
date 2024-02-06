/* criando meu primeiro componente react!

-Toda aplicação que a gente usar o React, temos que dar um "import React from 'react'"!

*/

//JSX

import React from 'react'
import { Container, H1, Image, ContainerItens, InputLabel, Input, Button } from "./style";
import People from './assets/peoples.svg'

const App = () => {

  return (<Container>
    <Image />
    <ContainerItens>

      <H1>Olá!</H1>

      <InputLabel>Nome</InputLabel>
      <Input placeholder='Nome'/>
      <InputLabel>Idade</InputLabel>
      <Input placeholder='Idade'/>

      <Button>Cadastrar</Button>

    </ContainerItens>
  </Container>)

}

export default App // isto porque no index.js estamos importando este componente, para podermos renderizar