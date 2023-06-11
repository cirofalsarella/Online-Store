import { Box, Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { NumberInput, NumberInputField, NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import imagemItem from "../../../assets/proMeal.png"
import { Link } from "react-router-dom"


const Product = () => {
  const index = localStorage.getItem("selectedProduct");
  let productList = [];
  let products = localStorage.getItem('productList');
  if(products !== null){
      productList = JSON.parse(products);
  }

  let prod = productList[index];

  return (
    
    <Box maxHeight='100%'>
      <div>{index}</div>
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
            alt={prod.imageAlt}
            padding='5px'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>{prod.title}</Heading>

              <Text py='2'>
                {prod.text}
              </Text>

              <Stack direction='row' spacing='4' display='flex' alignItems='center'>
                <Heading size='sm'>
                  {prod.formattedPrice}
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
                      color={i < prod.rating ? 'teal.500' : 'gray.300'}
                    />
                  ))}
                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                  {prod.reviewCount} reviews
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
                  <Heading size='md'>Avaliação</Heading>
                </CardHeader>
                <CardBody>
                  <p> Parece bom </p>
                  <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < prod.rating ? 'teal.500' : 'gray.300'}
                        />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      {prod.reviewCount} reviews
                    </Box>
                  </Box>
                </CardBody>
              </Stack>
            </Card>
            <Button colorScheme='orange' variant='solid'>
              Voltar
            </Button>

            <Link to={"/edit"}>
            <Button colorScheme='orange' variant='solid'>
              Editar Produto
            </Button>
            </Link>

            <Button colorScheme='orange' variant='solid'>
              Excluir produto
            </Button>

          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Product;
