import { loginContext } from "../../../App"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react";

import { Button, Card, Flex, FormControl, FormLabel, Heading, Input, Textarea, Avatar } from "@chakra-ui/react"

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

const Profile = () => {
  const navigate = useNavigate();
  const loginStatus = useContext(loginContext)[0]

  const [isLoading, setLoading] = useState(false)
    
    const handleUpdate = async event => {
        setLoading(true)
        await delay(1000)
        setLoading(false)

        if (loginStatus === 1)  return navigate("/")
        return navigate("/home")

    }
    
    return (
        <Flex justify={"center"} align={"center"}>
            <Card width={"70vw"} height={"70vh"} direction={"column"} align={"center"}>
                <Heading margin={"10px"}>Seu Perfil</Heading>

                <Flex justify={"space-around"}>
                    <Flex width={"40vw"} height={"55vh"} direction={"column"} justify={"space-around"}>
                        <FormControl>
                            <FormLabel>UserName</FormLabel>
                            <Input placeholder={"Nome"}></Input>
                        </FormControl>
                        <FormControl isDisabled>
                            <FormLabel>E-mail</FormLabel>
                            <Input placeholder={"E-mail"}></Input>
                        </FormControl>
                        <FormControl isDisabled>
                            <FormLabel>CPF</FormLabel>
                            <Input placeholder={"CPF"}></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Address</FormLabel>
                            <Textarea placeholder={"Address"}></Textarea>
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
  