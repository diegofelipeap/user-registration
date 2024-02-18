import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, User } from "./style";
import HomeImage from './assets/home.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

const App = () => {


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

  /* React Hook: useEffect -> Efeito Colateral! (dois parâmetros: função anônima e o segundo, um array.) 
    Pode ser chamado em duas ocasiões:
  - Quando minha aplicação inicia;
  - Quando um estado que está no array de dependência do useEffect é alterado.
    */


  useEffect(() => { //Não aceita async function, sendo necessário criar uma dentro do useEffect p/ funcionar. 
   async function fetchUsers(){

      const { data: newUsers } = await axios.get("http://localhost:3001/projects/")
      setUsers(newUsers)
   }
   fetchUsers()

    
  }, [])



  function deletUser(userId) {
    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)
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
      <ul>
        {users.map(user => (

          <User key={user.id}>
            <p>{user.name}</p> <p>{user.age}</p>
            <button onClick={() => deletUser(user.id)}> <img src={Trash} alt='Botão com ícone de lata de lixo' /> </button>
          </User>
        ))
        }
      </ul>

    </ContainerItens>
  </Container>)

}


export default App