import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'; //Novo React Hook: History!!!
import axios from 'axios'
import { Container, Image, InputLabel, Input, Button } from './style';
import HomeImage from '../../assets/home.svg'
import Arrow from '../../assets/arrow.svg'
import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'

const Home = () => {

  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  const inputName = useRef()
  const inputAge = useRef()

  const baseUrl = "https://first-node-project-five.vercel.app"

  async function addNewUser() {

    const { data: newUser } = await axios.post(`${baseUrl}/projects`,
      {
        name: inputName.current.value,
        age: inputAge.current.value
      })

    setUsers([...users, newUser])


    navigate("/usuarios")


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

      <Button onClick={addNewUser} >Cadastrar <img alt='Seta' src={Arrow} /></Button>

    </ContainerItens>
  </Container>)

}


export default Home