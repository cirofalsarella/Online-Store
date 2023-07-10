import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";

import { Box, Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { NumberInput, NumberInputField, NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper} from '@chakra-ui/react'
import { InputGroup, Input, InputRightElement } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

import { getItemById, updateCart } from "../../../services"

import imagemItem from "../../../assets/proMeal.png"

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const Item = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState({ ammount:0, price:0.00, description:"", name:"" })
  const userId = localStorage.getItem("userId")
  
  useEffect(() => {
    try {
      getItemById(localStorage.getItem("selectedProduct")).then(data => {setItem(data)})
    } catch {
      setItem({ ammount:0, price:0.00, description:"", name:"" })
    }
  } ,[])

  const [isLoadingAdd, setLoadingAdd] = useState(false)

  const [isLoadingDelivery, setLoadingDelivery] = useState(false)
  const [isVisibleDelivery, setVisibleDelivery] = useState(null)

  const handleCart = async event => {
    navigate("/cart")
  }

  const handleDelivery = async event => {
    setLoadingDelivery(true)
    await delay(1000)
    setLoadingDelivery(false)
    
    setVisibleDelivery(Math.random() * 50)
  }

  const handleAdd = async event => {
    if (userId === 'none') navigate('/login')

    setLoadingAdd(true)

    await updateCart({user:userId, item:item.id, ammount:1})

    setLoadingAdd(false)
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
            src={imagemItem}
            padding='5px'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>{item.name}</Heading>

              <Text py='2'>
                {item.description}
              </Text>

              <Stack spacing='4' display='flex' alignItems='center'>
                <Heading size='sm'>
                  R$ {item.price.toFixed(2)}
                </Heading>
                <NumberInput step={1} defaultValue={1} min={0} max={30} size='sm' width={"100px"}>
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
                      color={i < item.reviewAvg ? 'teal.500' : 'gray.300'}
                    />
                  ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                  {item.reviewCount} reviews
                </Box>
              </Box>
            </CardFooter>
          </Stack>
        </Card>
        <Box>
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
            <Button colorScheme='orange' variant='solid'
                    isLoading={isLoadingAdd} loadingText='Loading' onClick={handleAdd}
            >
              Adicionar ao carrinho
            </Button>
            <Button colorScheme='orange' variant='solid' onClick={handleCart}
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