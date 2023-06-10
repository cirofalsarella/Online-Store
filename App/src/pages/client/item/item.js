import { redirect, useNavigate } from "react-router-dom"
import { useState } from "react";

import { Box, Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { NumberInput, NumberInputField, NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper} from '@chakra-ui/react'
import { InputGroup, Input, InputRightElement } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import imagemItem from "../../../assets/proMeal.png"

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const Item = () => {
  const navigate = useNavigate();

  const [isLoadingAdd, setLoadingAdd] = useState(false)
  const [isLoadingCart, setLoadingCart] = useState(false)
  const [isLoadingDelivery, setLoadingDelivery] = useState(false)
  
  const handleCart = async event => {
    setLoadingCart(true)
    console.log("alfa")
    await delay(1000)
    setLoadingCart(false)

    navigate("/cart")
  }

  const handleDelivery = async event => {
    setLoadingDelivery(true)
    console.log("alfa")
    await delay(1000)
    setLoadingDelivery(false)
  }

  const handleAdd = async event => {
    setLoadingAdd(true)
    console.log("alfa")
    await delay(1000)
    setLoadingAdd(false)
  }

  const property = {
    imageUrl: imagemItem,
    imageAlt: 'Barra de proteína',
    title: 'Barra de proteína super calórica',
    text: 'Barra de proteína super calórica usada por astronautas e militares para a execução de seus exercícios.  Contém 10g de proteína e  1000 kcal.',
    formattedPrice: 'R$5,00',
    reviewCount: 34,
    rating: 4,
  }
  
  return (
    
    <Box maxHeight='100%'>
      <Stack direction='row' display="flex" justifyContent="center" alignItems="center">
        <Card
          display={'flex'}
          justifyContent={'center'}
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          maxW='60%'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={property.imageUrl}
            alt={property.imageAlt}
            padding='5px'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>{property.title}</Heading>

              <Text py='2'>
                {property.text}
              </Text>

              <Stack direction='row' spacing='4' display='flex' alignItems='center'>
                <Heading size='sm'>
                  {property.formattedPrice}
                </Heading>
                <NumberInput step={1} defaultValue={1} min={0} max={30} size='sm' maxW='10%'>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Stack>
            </CardBody>

            <CardFooter>
              <Box display='flex' mt='2' alignItems='center'>
                {Array(5)
                  .fill('')
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < property.rating ? 'teal.500' : 'gray.300'}
                    />
                  ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                  {property.reviewCount} reviews
                </Box>
              </Box>
            </CardFooter>
          </Stack>
        </Card>
        <Box>
          <Stack direction='column' spacing='2'>
          <Card>
            <Stack>
              <CardHeader>
                <Heading size='md'>Frete</Heading>
              </CardHeader>
              <CardBody>
                <InputGroup size='md'>
                  <Input
                    pr='4.5rem'
                    placeholder='Digite o CEP'
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' padding='1px'
                      isLoading={isLoadingDelivery} loadingText='Loading' onClick={handleDelivery}
                    >
                      Calcular
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </CardBody>
            </Stack>
          </Card>
            <Button colorScheme='orange' variant='solid'
              isLoading={isLoadingAdd} loadingText='Loading' onClick={handleAdd}
            >
              Adicionar ao carrinho
            </Button>
            <Button colorScheme='orange' variant='solid'
              isLoading={isLoadingCart} loadingText='Loading' onClick={handleCart}
            >
              Ir para o carrinho
            </Button>

          </Stack>
        </Box>
        </Stack>
      </Box>
    );
}

export default Item;
