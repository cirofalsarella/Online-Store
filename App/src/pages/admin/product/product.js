import { Box, Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { NumberInput, NumberInputField, NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import imagemItem from "../../../assets/proMeal.png"




const Product = () => {

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
                          color={i < property.rating ? 'teal.500' : 'gray.300'}
                        />
                      ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                      {property.reviewCount} reviews
                    </Box>
                  </Box>
                </CardBody>
              </Stack>
            </Card>
            <Button colorScheme='orange' variant='solid'>
              Voltar
            </Button>
            <Button colorScheme='orange' variant='solid'>
              Editar produto
            </Button>
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
