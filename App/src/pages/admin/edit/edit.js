import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Button, Card, Flex, Heading, Image, Input } from '@chakra-ui/react';

import Counter from '../../../Components/product/Counter';
import imagemItem from "../../../assets/proMeal.png";

import { createItem, getItemById } from "../../../services"

const Cadastre = () => {
  const navigate = useNavigate();

  let dbProduct
  try {
    dbProduct = getItemById(localStorage.getItem("selectedProduct"))
    
  } catch {
    dbProduct = {
      ammount:0,
      cost:0.00,
      description:"",
      name:""
    }
  }

  const [productName, setProductName] = useState(dbProduct.name);
  const [productCost, setProductCost] = useState(dbProduct.cost);
  const [productDescription, setProductDescription] = useState(dbProduct.description);
  const [productQuantity, setProductQuantity] = useState(dbProduct.ammount);

  const handleFormSubmit = async event => {
    await createItem({
      name: productName,
      cost: productCost,
      description: productDescription,
      quantity: productQuantity,
    })
    
    return navigate("/home")
  };

  return (
    <Flex justify="center" align="center">
      <Card width="70vw" height="70vh" direction="column" align="center">
        <Heading margin="10px">Adição de Produtos</Heading>

        <Flex justify="space-around">
          <Flex width="40vw" height="55vh" direction="column" justify="space-around">
            <Input
              placeholder="Nome do produto"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <Input
              placeholder="Custo do produto"
              value={productCost}
              onChange={(e) => setProductCost(e.target.value)}
              type="number"
              step="0.01"
              min="0"
              pattern="^\d+(,\d{0,2})?$" // Pattern to accept comma decimal separator
              lang="pt-BR" // Set the language to Brazilian Portuguese for correct number formatting
            />
            <Input
              placeholder="Descrição do produto"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
            <p>Quantidade do produto</p>
            <Counter/>
          </Flex>

          <Flex width="20vw" direction="column" justify="space-between" align="center">
            <Image src={imagemItem} />
            <Button size="lg" onClick={handleFormSubmit}>Enviar</Button>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export default Cadastre;
