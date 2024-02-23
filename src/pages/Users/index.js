import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'; //Novo React Hook: History!!!
import axios from 'axios'
import { Container, H1, Image, ContainerItens, Button, User } from "./style";
import Peoples from '../../assets/peoples.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

const Users = () => {

  const history = useHistory()

  const [users, setUsers] = useState([])



  /* React Hook: useEffect -> Efeito Colateral! (dois parâmetros: função anônima e o segundo, um array.) 
    Pode ser chamado em duas ocasiões:
  - Quando minha aplicação inicia;
  - Quando um estado que está no array de dependência do useEffect é alterado.
    */


  useEffect(() => { //Não aceita async function, sendo necessário criar uma dentro do useEffect p/ funcionar. 
    async function fetchUsers() {

      const { data: newUsers } = await axios.get("http://localhost:3001/projects/")
      setUsers(newUsers)
    }
    fetchUsers()


  }, [])



  async function deletUser(userId) {
    await axios.delete(`http://localhost:3001/projects/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)
  }

  return (<Container>
    <Image alt='Logo da tela de registro' src={Peoples} />
    <ContainerItens>

      <H1>Usuários</H1>


      <ul>
        {users.map(user => (

          <User key={user.id}>
            <p>{user.name}</p> <p>{user.age}</p>
            <button onClick={() => deletUser(user.id)}> <img src={Trash} alt='Botão com ícone de lata de lixo' /> </button>
          </User>
        ))
        }
      </ul>

      <Button to="/"> <img alt='Seta' src={Arrow} /> Voltar </Button>

    </ContainerItens>
  </Container>)

}


export default Users