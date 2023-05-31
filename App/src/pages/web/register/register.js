import { headerContext } from "../../../App"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, Flex, Image, Heading, Input, Button, FormControl, FormLabel, FormErrorMessage, fadeConfig } from "@chakra-ui/react";

import ImagemLogo from "../../../assets/logo.png"

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);
  

const Register = () => {
  const navigate = useNavigate();
  
  const setHeaderDisplay = useContext(headerContext)
  setHeaderDisplay(false)

  const [isLoading, setLoading] = useState(false)


  const [email, setEmail] = useState("")
  // const [onUseEmail, setonUseEmail] = useState(false)


  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [passwordDifferent, setPasswordDifferent] = useState(false)

  const handleRegistration = async event => {
    setLoading(true)
    await delay(1000);

    if (password === passwordConfirmation){
      setPasswordDifferent(false)
        // Check if email is already on use
        // Register account && redirect
        return navigate("/")
        
    } else {
      setPasswordDifferent(true)
    }

    setLoading(false)
  }


  return (
    <Flex justify={"center"} align={"center"} height="100vh">
      <Card
        height={"90vh"} width={"40vw"}
        direction={"column"} justify={"space-around"}
      >
        <Flex align={"center"} justify={"center"} gap={8}>
          <Image src={ImagemLogo} objectFit={'cover'} boxSize={"10vh"}/>
          <Heading padding={"10px"}>CIV</Heading>
        </Flex>


        <Flex direction={"column"} gap={10} margin={"20px"}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' value={email} onChange={ e => setEmail(e.target.value) }/>
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input value={password} onChange={ e => setPassword(e.target.value) } />
          </FormControl>

          <FormControl isInvalid={passwordDifferent}>
            <FormLabel>Confirm your password</FormLabel>
            <Input value={passwordConfirmation} onChange={ e => setPasswordConfirmation(e.target.value) } />
            <FormErrorMessage>The passwords does not match.</FormErrorMessage>
          </FormControl>

          <Button isLoading={isLoading} loadingText='Loading' onClick={handleRegistration}>Register</Button>
        </Flex>

      </Card>
    </Flex>
    );
}

export default Register;
