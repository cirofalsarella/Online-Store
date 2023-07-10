import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

import Historic from "./historic";

import { Button, Card, Flex, FormControl, FormLabel, Heading, Input, Textarea, Avatar, Stack } from "@chakra-ui/react"
import { getUser, updateUser } from "../../../services"

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);


const Profile = () => {
  const navigate = useNavigate();
  
  const [userId, setUserId] = useState(localStorage.getItem("userId"))
  const [user, setUser] = useState({})
  
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")

  const [isLoading, setLoading] = useState(false)
  
  useEffect(() => {
    if (userId === "none")  return navigate("/login");

    getUser(userId).then((data) => {
      setUser(data)
    })
  }, [userId])

  useEffect(() => {
    setName(user.name)
    setAddress(user.address)
  }, [user])

  const handleUpdate = async event => {
    setLoading(true)

    updateUser({
      name: name,
      address: address,
      id: userId
    })

    setLoading(false)

    if (user.admin) return navigate("/home")
    return navigate("/")
  }

  const handleLogout = async event => {
    localStorage.setItem('userId', "none");
    return navigate("/")
  }

  return (
    <Stack>
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

            <Flex width={"18vw"} direction={"column"} justify={"space-between"} align={"center"}>
              <Avatar />
              <Flex direction={"column"} >
                <Button margin={"10px"} size={"lg"} isLoading={isLoading} loadingText='Loading' onClick={handleUpdate}>Atualizar</Button>
                <Button margin={"10px"} size={"lg"} onClick={handleLogout} color={"red"}>Log Out</Button>
              </Flex>
            </Flex>
          </Flex>
        </Card>

      </Flex>

      <Historic />
    </Stack>
  );
}

export default Profile;
