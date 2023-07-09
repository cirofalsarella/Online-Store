import { Box, Card, CardBody, Flex, Image, Stack, Heading, Button } from '@chakra-ui/react'
import imagemItem from "../../../assets/proMeal.png"
import { Link } from "react-router-dom"
import { useState } from 'react'

import { getItem } from "../../../services"

const ProductCard = ({ name, price, id }) => {
  const selectItem = () =>{
      localStorage.setItem("selectedProduct", id);
  };
    
  return (
      <Card
      display={'flex'}
      justifyContent={'center'}
      direction={{ base: 'column', sm: 'column' }}
      alignItems={'center'}
      overflow='hidden'
      variant='outline'
      maxW='60%'
    >
      <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={imagemItem} alt={name} padding='5px'/>
      <Stack>
        <CardBody>
          <Heading size='md'>{name}</Heading>
          <Stack direction='row' spacing='4' display='flex' alignItems='center'>
            <Heading size='sm'>
              R$ {price.toFixed(2)}
            </Heading>
            <Button>
              <Link to={'/product'} onClick={selectItem}>Selecionar</Link>
            </Button>
          </Stack>
        </CardBody>
      </Stack>
    </Card>
  );
}


const Home = () => {
  const [items, setItems] = useState([])
  
  try {
    getItem().then(data => {setItems(data)})
  } catch (e) {
    console.log(e)
  }

  return (    
    <Box maxHeight='100%'>
      <Flex direction='row' gap='2rem' wrap={'wrap'}  alignItems="center">      
        {
          items.map( (product, i) =>{
            return (
              <ProductCard  
                imageURL={imagemItem}
                name = {product.name} 
                price={product.price} 
                id={i}
              />
            )
          })
        }
      </Flex>
    </Box>

  );
}

export default Home;