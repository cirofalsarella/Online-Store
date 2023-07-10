import { headerContext } from "../../../App"
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Card, Flex, Image, Heading, Input, Button, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

import ImagemLogo from "../../../assets/logo.png"

import { createUser } from "../../../services"

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);
  

const Register = () => {
  const navigate = useNavigate();
  
  const setHeaderDisplay = useContext(headerContext)
  setHeaderDisplay(false)

  const [isLoading, setLoading] = useState(false)

  const [email, setEmail] = useState("")
  const [onUseEmail, setOnUseEmail] = useState(false)

  const [cpf, setCpf] = useState("")
  const [onUseCpf, setOnUseCpf] = useState(false)
  
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [passwordDifferent, setPasswordDifferent] = useState(false)


  const HandleRegistration = async event => {
    setLoading(true)
    await delay(1000)

    let isValid = true
    if (password !== passwordConfirmation) {
      isValid = false
      setPasswordDifferent(true)
    }
    // if (userList.find(x => x.email === email)) {
    //   isValid = false
    //   setOnUseEmail(true)
    // }
    // if (userList.find(x => x.cpf === cpf)) {
    //   isValid = false
    //   setOnUseCpf(true)
    // }

    
    if (isValid) {
      createUser({
        email:email,
        cpf:cpf,
        password:password,
        admin:false
      }).then(navigate("/login"))
    }

    setLoading(false)
  }

  useEffect(() => {
    setOnUseCpf(false)
  }, [cpf])

  useEffect(() => {
    setOnUseEmail(false)
  }, [email])

  useEffect(() => {
    setPasswordDifferent(false)
  }, [password, passwordConfirmation])

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
          <FormControl isInvalid={onUseEmail}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={ e => setEmail(e.target.value) }/>
            <FormErrorMessage>Email is already is on use.</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={onUseCpf}>
            <FormLabel>CPF</FormLabel>
            <Input type="number" value={cpf} onChange={ e => setCpf(e.target.value) }/>
            <FormErrorMessage>CPF already is on use.</FormErrorMessage>
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

          <Button isLoading={isLoading} loadingText='Loading' onClick={HandleRegistration}>Register</Button>
        </Flex>

      </Card>
    </Flex>
  );
}

export default Register;
