import { Button, Card, Flex, FormControl, FormLabel, Heading, Input, Textarea, Avatar } from "@chakra-ui/react"

const Profile = () => {
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
                        <Button size={"lg"}>Atualizar</Button>
                    </Flex>
                </Flex>
            </Card>
        </Flex>
      );
  }
  
  export default Profile;
  