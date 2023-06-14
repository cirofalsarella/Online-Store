import React, { useState } from 'react';
import {
  Button,
  Card,
  Flex,
  FormControl,
  Heading,
  Input,
} from '@chakra-ui/react';

import Counter from '../../../Components/product/Counter';

import imagemItem from "../../../assets/proMeal.png";

const Cadastre = () => {
  const [productName, setProductName] = useState('');
  const [productCost, setProductCost] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productQuantity, setProductQuantity] = useState(1);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create a new object with the form data
    const productData = {
      name: productName,
      cost: productCost,
      description: productDescription,
      quantity: productQuantity,
    };

    // Store the data in local storage or pass it to another page
    // Example: store in local storage
    localStorage.setItem('productData', JSON.stringify(productData));

    // Reset the form inputs
    setProductName('');
    setProductCost('');
    setProductDescription('');
    setProductQuantity(1);
  };

  return (
    <Flex justify="center" align="center">
      <Card width="70vw" height="70vh" direction="column" align="center">
        <Heading margin="10px">Adição de Produtos</Heading>

        <Flex justify="space-around">
          <Flex width="40vw" height="55vh" direction="column" justify="space-around">
            <form onSubmit={handleFormSubmit}>
              <FormControl>
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
              </FormControl>
            </form>
          </Flex>

          <Flex width="20vw" direction="column" justify="space-between" align="center">
            <img src={imagemItem} alt="Description of the image" />
            <Button size="lg">Enviar</Button>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export default Cadastre;
