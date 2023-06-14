import { useNavigate } from "react-router-dom"
import { useState } from "react";

import { Button, Card, Flex, FormControl, FormLabel, Heading, Input, Textarea, Avatar } from "@chakra-ui/react"

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);


const Profile = () => {
  const navigate = useNavigate();

  let userId = localStorage.getItem("userId");
  if (userId == null) navigate("/login");

  let userList = [];
  let users = localStorage.getItem('userList');

  if (users !== null) userList = JSON.parse(users)
  if (!userList.length) navigate("/login")

  const user = userList[userId]
  console.log(userList)
  
  const [name, setName] = useState(user.username)
  const [address, setAddress] = useState(user.address)

  const [isLoading, setLoading] = useState(false)
  const handleUpdate = async event => {
    setLoading(true)
    await delay(1000)

    userList[userId].username = name
    userList[userId].address = address

    localStorage.setItem('userList', JSON.stringify(userList));
    setLoading(false)

    if (user.admin) return navigate("/home")
    return navigate("/")
  }

  return (
    <Flex justify={"center"} align={"center"}>
      <Card width={"70vw"} height={"70vh"} direction={"column"} align={"center"}>
        <Heading margin={"10px"}>Seu Perfil</Heading>

        <Flex justify={"space-around"}>
          <Flex width={"40vw"} height={"55vh"} direction={"column"} justify={"space-around"}>
            <FormControl>
              <FormLabel>UserName</FormLabel>
              <Input placeholder={"Nome"} value={name} onChange={e => setName(e.target.value)} />
            </FormControl>
            <FormControl isDisabled>
              <FormLabel>E-mail</FormLabel>
              <Input placeholder={"E-mail"} value={user.email} />
            </FormControl>
            <FormControl isDisabled>
              <FormLabel>CPF</FormLabel>
              <Input placeholder={"CPF"} value={user.cpf} />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Textarea placeholder={"Address"} value={address} onChange={e => setAddress(e.target.value)} />
            </FormControl>
          </Flex>

          <Flex width={"20vw"} direction={"column"} justify={"space-between"} align={"center"}>
            <Avatar />
            <Button size={"lg"} isLoading={isLoading} loadingText='Loading' onClick={handleUpdate}>Atualizar</Button>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
}

export default Profile;
