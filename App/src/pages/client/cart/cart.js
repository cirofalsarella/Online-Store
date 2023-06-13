import { useNavigate } from "react-router-dom"
import { useState } from "react";

import { Box, Grid, GridItem, Text, Image, Stack, Heading, Flex } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement, NumberInput, NumberInputField, NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, Button } from '@chakra-ui/react'

import imagemItem from "../../../assets/proMeal.png"
import imagemPix from "../../../assets/pix.png"
import imagemCartao from "../../../assets/cartao.png"
import imagemBoleto from "../../../assets/boleto.png"

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const Cart = () => {
  const navigate = useNavigate();
  const [isLoadingShop, setLoadingShop] = useState(false)
  const [isLoadingDelivery, setLoadingDelivery] = useState(false)
  const [isVisibleDelivery, setVisibleDelivery] = useState(null)

  const handleDelivery = async event => {
    setLoadingDelivery(true)
    console.log("alfa")
    await delay(1000)
    setLoadingDelivery(false)
    setVisibleDelivery(Math.random() * 50)
  }

  const handleShop = async event => {
    setLoadingShop(true)
    await delay(1000)
    setLoadingShop(false)

    navigate("/")
  }

  const products = [
    { id: 1, title: 'Barra de proteína super calórica', imageUrl: imagemItem, price: 'R$5,00' },
    { id: 2, title: 'Barra de proteína super calórica', imageUrl: imagemItem, price: 'R$5,00' },
    { id: 3, title: 'Barra de proteína super calórica', imageUrl: imagemItem, price: 'R$5,00' },
  ];

  return (

    <Flex justify={"center"} align={"center"} gap='4'>

      <Grid templateRows="repeat(3, 1fr)" gap={4} justifyContent='center'>
        {products.map((card) => (
          <GridItem key={card.id}>
            <Box p={4} borderWidth="1px" borderRadius="md">
            <Stack direction='row' display="flex" alignItems="center" justify='space-between'>
                <Image src={card.imageUrl} maxW={{ base: '50%', sm: '100px' }}/>
                <Text fontWeight="bold">{card.title}</Text>
                <Text>{card.price}</Text>
                <NumberInput step={1} defaultValue={1} min={0} max={30} size='sm' maxW='10%'>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
              </Stack>
            </Box>
          </GridItem>
        ))}
      </Grid>

      <Stack direction='column' spacing='2'>
        <Card>
          <CardHeader>
            <Heading size='md'>Frete</Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing='4'>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  placeholder='Digite o CEP'
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' padding='1px' colorScheme="orange"
                          isLoading={isLoadingDelivery} loadingText='Loading' onClick={handleDelivery}
                  >
                    Calcular
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Card>
                <Text align='center'>{isVisibleDelivery !== null && <p>Valor do frete: R${isVisibleDelivery.toFixed(2)}</p>}</Text>
              </Card>
            </Stack>
          </CardBody>
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