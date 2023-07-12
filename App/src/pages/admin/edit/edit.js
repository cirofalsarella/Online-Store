import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Flex, Heading, Image, Input, Text } from '@chakra-ui/react';
import { InputGroup, InputRightElement, NumberInput, NumberInputField, NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper} from '@chakra-ui/react'
import imagemItem from '../../../assets/proMeal.png';

import { getItemById, createItem, updateItem } from '../../../services'

const Edit = () => {
  const navigate = useNavigate();

  const productId = localStorage.getItem('selectedProduct')
  const [isNew, setNew] = useState()
  const [product, setProduct] = useState({ stock: 0, price: 0.0, description: "", name: "abc", img: "abc" })

  localStorage.getItem('selectedProduct')
  useEffect(() => {
    console.log("id: " + productId)

    if (productId == "none") {
      setNew(true)
      setProduct({ stock: 0, price: 0.0, description: "", name: "", img: "abc" })

    } else {
      setNew(false)
      getItemById(productId).then((data) => {
        setProduct(data)
      })
    }
  }, [productId])

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(product)

    if (isNew) {
      console.log(product)
      await createItem(product);
    } else {
      await updateItem(product)
    }
    navigate('/home');
  }

  return (
      <Flex justify="center" align="center">
        <Card width="70vw" height="70vh" direction="column" align="center">
          <Heading margin="10px">Edição de Produtos</Heading>

          <Flex justify="space-around">
            <Flex width="40vw" height="55vh" direction="column" justify="space-around">
              <Input
                  placeholder="Nome do produto"
                  value={product.name}
                  onChange={(e) => setProduct({...product, "name": e.target.value})}
              />
              <Input
                  placeholder="Custo do produto"
                  value={product.price}
                  onChange={(e) => setProduct({...product, "price": e.target.value})}
                  type="number"
              />
              <Input
                  placeholder="Descrição do produto"
                  value={product.description}
                  onChange={(e) => setProduct({...product, "description": e.target.value})}
              />
              <Text>Estoque:</Text>

              <NumberInput value={product.stock} min={0} width='100px'
                onChange={ e => { 
                  setProduct(
                      { ...product, stock:e }
                  );
                }}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

            </Flex>

            <Flex width="20vw" direction="column" justify="space-between" align="center">
              <Flex direction="column" justify="space-between" align="center">
                <Image src={imagemItem} />
                <Button size="lg" onClick={handleFormSubmit}>
                  Enviar
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Flex>
  );
};

export default Edit;
