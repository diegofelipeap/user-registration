import React, { useState, useRef } from 'react'
import axios from 'axios'
import { Container, H1, Image, ContainerItens, InputLabel, Input, Button } from "./style";
import HomeImage from '../../assets/home.svg'
import Arrow from '../../assets/arrow.svg'

const Home = () => {


  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()


  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/projects/",
      {
        name: inputName.current.value,
        age: inputAge.current.value
      })

    setUsers([...users, newUser])


  }


  return (<Container>
    <Image alt='Logo do site de cadastro' src={HomeImage} />
    <ContainerItens>

      <H1>Easy
        <br />
        SignUp</H1>

      <InputLabel>Nome</InputLabel>
      <Input ref={inputName} placeholder='Nome' />
      <InputLabel>Idade</InputLabel>
      <Input ref={inputAge} placeholder='Idade' />

      <Button to="/usuarios" onClick={addNewUser} >Cadastrar <img alt='Seta' src={Arrow} /></Button>

    </ContainerItens>
  </Container>)

}


export default Home