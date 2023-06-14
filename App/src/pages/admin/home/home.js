import { Box, Card, CardHeader, CardBody, Flex,CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import imagemItem from "../../../assets/proMeal.png"
import { Link } from "react-router-dom"

const ProductCard = ({imageURL,name, price,id}) => {
    const selectItem = () =>{
        localStorage.setItem("selectedProduct", id);
        console.log(id);
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
                {price}
              </Heading>
              <Button>
                <Link to={'/product'} onClick={selectItem}>clica aqui vai</Link>
              </Button>
            </Stack>
          </CardBody>
        </Stack>
      </Card>
    );
}


const Home = () => {
    
    const selected = localStorage.getItem("selectedProduct");
    let productList = [];
    let products = localStorage.getItem('productList');
    if(products !== null){
        productList = JSON.parse(products);
    }

    return (    
    <Box maxHeight='100%'>
        <div>{selected}</div>

        <Flex direction='row' gap='2rem' wrap={'wrap'}  alignItems="center">      
            {
                productList.map( (product, i) =>{
                    return (
                        <ProductCard  
                        imageURL={product.imageUrl}
                        name = {product.title} 
                        price={product.formattedPrice} 
                        id={i} />
                        )
                    })
                }
        </Flex>
  </Box>

    );
}

export default Home;