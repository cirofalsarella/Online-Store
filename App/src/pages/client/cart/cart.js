import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

import { Box, Text, Image, Stack, Heading, Flex } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement, NumberInput, NumberInputField, NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, Button } from '@chakra-ui/react'

import {DeleteIcon} from '@chakra-ui/icons'

import { getCart, updateCart, addHistoric } from "../../../services"

import imagemItem from "../../../assets/proMeal.png"
import imagemPix from "../../../assets/pix.png"
import imagemCartao from "../../../assets/cartao.png"
import imagemBoleto from "../../../assets/boleto.png"

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const Cart = () => {
  const userId = localStorage.getItem('userId')
  const [products, setProducts] = useState([])

  useEffect(() => {
    try {
      getCart(userId).then(data => setProducts(data))
    } catch (e) {
      console.log(e)
    }
  }, [])
  

  const navigate = useNavigate();
  const [isLoadingShop, setLoadingShop] = useState(false)
  const [isLoadingDelivery, setLoadingDelivery] = useState(false)
  const [isVisibleDelivery, setVisibleDelivery] = useState(null)

  const handleDelivery = async event => {
    setLoadingDelivery(true)
    await delay(1000)
    setLoadingDelivery(false)

    setVisibleDelivery(Math.random() * 50)
  }

  const handleShop = async event => {
    setLoadingShop(true)

    addHistoric(products, userId)
    updateCart({}, userId)
    
    
    setLoadingShop(false)

    navigate("/")
  }

  const handleRemove = async event => {
    setProducts(products.filter((val) => {return val.id !== event}))
    updateCart(products, userId)
  }


  return (
    <Flex justify={"center"} gap='4'>
  
      {/* Item */}
      <Stack>
        {products.map((item) => (
          <Card padding={"4"} width={"50vw"}>
            <Flex alignItems="center" justify='space-between'>
              <Image src={imagemItem} maxW={{ base: '50%', sm: '100px' }}/>
              
              <Stack>
                <Text fontWeight="bold">{item.title}</Text>
                <Text>R$ {item.price.toFixed(2)}</Text>
                <Text>Estoque: {item.stock}</Text>
              </Stack>

              {/* Ammount selector */}
              <NumberInput value={item.ammount} min={1} max={item.stock} width='100px'
                onChange={ e => { 
                  setProducts(
                    products.map((product) =>
                      (product.id === item.id) ? { ...product, ammount:e } : { ...product }
                    )
                  );
                }}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

              <DeleteIcon boxSize={6} cursor={"pointer"} onClick={e => handleRemove(item.id)}/>

            </Flex>
          </Card>
        ))}
      </Stack>

      <Stack>

        <Card>
          <CardHeader>
            <Heading size='md'>Frete</Heading>
          </CardHeader>

          <Stack height={"100px"} padding={"5px"} justify={"space-between"} align={"center"}>
            <Text align='center'>{isVisibleDelivery !== null && <p>Valor do frete: R${isVisibleDelivery.toFixed(2)}</p>}</Text>

            <InputGroup size='md' width={"90%"}>
              <Input pr='4.5rem' placeholder='Digite o CEP'/>
              <InputRightElement width='4.5rem'>
                <Button size='sm' padding='1px' colorScheme="orange"
                        isLoading={isLoadingDelivery} loadingText='Loading' onClick={handleDelivery}
                >
                  Calcular
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Card>

        <Card>
          <CardHeader>
            <Heading size='md'>Forma de pagamento</Heading>
          </CardHeader>
          <CardBody>
            <Flex gap='4' justify='space-between'>
              <Button>
                <Box direction='row'>
                    <Image  src={imagemPix} maxW={{ base: '7%', sm: '20px' }}></Image>
                    <Text mt='0' fontSize='sm'>Pix</Text>
                </Box>
              </Button>
              <Button>
                <Box direction='row'>
                  <Image src={imagemCartao} maxW={{ base: '10%', sm: '25px' }}></Image>
                  <Text mt='0' fontSize='sm'>Cartão</Text>
                  </Box>
              </Button>
              <Button>
                <Box direction='row'>
                  <Image src={imagemBoleto} maxW={{ base: '10%', sm: '25px' }}></Image>
                  <Text mt='0' fontSize='sm'>Boleto</Text>
                </Box>
              </Button>
            </Flex>
          </CardBody>
        </Card>

        <Button colorScheme='orange' variant='solid' isLoading={isLoadingShop} loadingText='Loading' onClick={handleShop}>Finalizar pedido</Button>

      </Stack>

    </Flex>
  );
};

export default Cart;