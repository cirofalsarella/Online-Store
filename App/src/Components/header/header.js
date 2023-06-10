import { Link } from "react-router-dom"

import {
  Flex, Heading, Image, Icon, Avatar,
  InputGroup, Input, InputRightElement
} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'

import ImagemLogo from "../../assets/logo.png"

const Header = () => {
  return (
    <Flex
      width={"100vw"} height={"15vh"} padding={"20px"}
      justify={"space-between"} align={"center"}
    >
      <Link to="./">
        <Flex align={"center"} gap={6}>
          <Image src={ImagemLogo} objectFit={'cover'} boxSize={"10vh"}/>
          <Heading padding={"10px"}>CIV</Heading>
        </Flex>
      </Link>
      
      <InputGroup size="md" width={"30vw"}>
        <Input placeholder="Pesquise produtos ou marcas"/>
        <InputRightElement>
          <Icon as={SearchIcon}/>
        </InputRightElement>
      </InputGroup>

    <Link to="./profile">
      <Avatar />
    </Link>
    </Flex>
  );
}
  
export default Header;
