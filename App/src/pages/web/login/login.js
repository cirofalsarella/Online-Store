import { headerContext, loginContext } from "../../../App"
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Card, Flex, Image, Heading, Input, Button, Text } from "@chakra-ui/react";

import ImagemLogo from "../../../assets/logo.png"

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);
  

const Login = () => {
  const navigate = useNavigate();
  
  const setLoginStatus = useContext(loginContext)[1]
  const setHeaderDisplay = useContext(headerContext)
  setHeaderDisplay(false)

  const [isInvalid, setInvalid] = useState(false)
  const [isLoading, setLoading] = useState(false)


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const tryLogin = async event => {
    setLoading(true)
    await delay(1000);

    let userList = [];
    let users = localStorage.getItem('userList');
    if (users !== null){
      userList = JSON.parse(users).filter((user) => {
        return user.email === email && user.password === password
      });
    }
    
    if (!userList.length)  setInvalid(true)
    else {
      localStorage.setItem('userId', userList[0].id);
      console.log(userList[0].id)

      setHeaderDisplay(true)
      
      if (userList[0].admin) {
        setLoginStatus(2)
        return navigate("/home")
      }

      setLoginStatus(1)
      return navigate("/")
    }
    
    setLoading(false)
  }

  return (
    <Flex justify={"center"} align={"center"} height="100vh">
      <Card
        height={"70vh"} width={"40vw"}
        direction={"column"} justify={"space-around"}
      >
        <Flex align={"center"} justify={"center"} gap={8}>
          <Image src={ImagemLogo} objectFit={'cover'} boxSize={"10vh"}/>
          <Heading padding={"10px"}>CIV</Heading>
        </Flex>


        <Flex direction={"column"} gap={10} margin={"20px"}>
          <Input 
            isInvalid={isInvalid} errorBorderColor='crimson' placeholder='E-mail'
            value={email} onChange={ e => setEmail(e.target.value) }
          />
          
          <Input 
            isInvalid={isInvalid} errorBorderColor='crimson' placeholder='Password'
            value={password} onChange={ e => setPassword(e.target.value) }
            />

          <Button isLoading={isLoading} loadingText='Loading' onClick={tryLogin}>Login</Button>
        </Flex>
        
        
        <Flex justify={"center"}>
          <Text >
            <>Não tem uma conta? </>
            <Link to={"/register"}>Cadastre-se!</Link>
          </Text>
        </Flex>
      </Card>
    </Flex>
    );
}

export default Login;
