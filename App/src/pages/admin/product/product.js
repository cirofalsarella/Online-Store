import { Flex, Box, Card, CardHeader, CardBody, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import imagemItem from "../../../assets/proMeal.png"
import { useNavigate } from "react-router-dom";

import { getItemById} from "../../../services"
import { useState } from 'react'

const Product = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState({ ammount:0, price:0.00, description:"", name:"" })
  
  try {
    getItemById(localStorage.getItem("selectedProduct")).then(data => {setItem(data)})
  } catch {
    setItem({
      ammount:0,
      price:0.00,
      description:"",
      name:""

    })
  }

  return (
    <Flex maxHeight='100%' justify={"center"} gap={"4"}>

      <Card padding={"4"} width={"60%"}>
        <Flex align={"center"} gap={"10"}>
          <Image src={imagemItem} maxH={"30vh"}/>
          
          <Stack>
            <Heading fontWeight="bold">{item.name}</Heading>
            <Text>R$ {item.price.toFixed(2)}</Text>
            <Text>{item.description}</Text>
            <Text>Estoque: {item.stock}</Text>
          </Stack>

        </Flex>
      </Card>
      
      <Stack>
        <Card>
          <Stack>
            <CardHeader>
              <Heading size='md'>Avaliação</Heading>
            </CardHeader>
            <CardBody>
              <Box display='flex' mt='2' alignItems='center'>
                <Flex justify={"center"} align={"center"}>
                  <StarIcon cursor={"pointer"} color={item.reviewAvg >= 1 ? "gold" : "grey"}/>
                  <StarIcon cursor={"pointer"} color={item.reviewAvg >= 2 ? "gold" : "grey"}/>
                  <StarIcon cursor={"pointer"} color={item.reviewAvg >= 3 ? "gold" : "grey"}/>
                  <StarIcon cursor={"pointer"} color={item.reviewAvg >= 4 ? "gold" : "grey"}/>
                  <StarIcon cursor={"pointer"} color={item.reviewAvg >= 5 ? "gold" : "grey"}/>
                </Flex>
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                  {item.reviewCount} reviews
                </Box>
              </Box>
            </CardBody>
          </Stack>
        </Card>
        <Button colorScheme='orange' variant='solid' sx={{ minWidth: '200px' }} onClick={e => {return navigate('/home')}}>
          Voltar
        </Button>

        <Button colorScheme='orange' variant='solid' sx={{ minWidth: '200px' }} onClick={e => {return navigate('/edit')}}>
          Editar Produto
        </Button>

      </Stack>
    </Flex>
  );
}

export default Product;
