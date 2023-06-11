import React, { useState } from 'react';
import {
  Button,
  Card,
  Flex,
  FormControl,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';

import imagemItem from "../../../assets/proMeal.png";

const Edit = () => {
  const index = localStorage.getItem("selectedProduct");
  let productList = [];
  let products = localStorage.getItem('productList');
  if(products !== null){
    productList = JSON.parse(products);
  }
  
  let prod = productList[index];
  
  const [productName, setProductName] = useState(prod.title);
  const [productCost, setProductCost] = useState(prod.formattedPrice);
  const [productDescription, setProductDescription] = useState(prod.text);
  const [productQuantity, setProductQuantity] = useState(1);


  const handleFormSubmit = (event) => {
    event.preventDefault();

    productList[index].title = productName;
    productList[index].formattedPrice = productCost;
    productList[index].text = productDescription;


    localStorage.setItem('productList',JSON.stringify(productList));


    window.location.href = "/product";

    // console.log("daasdasda");
    // // Create a new object with the form data
    // const productData = {
    //   name: productName,
    //   cost: productCost,
    //   description: productDescription,
    //   quantity: productQuantity,
    // };

    // console.log(event);
    // console.log(productData);

    // // Store the data in local storage or pass it to another page
    // // Example: store in local storage
    // localStorage.setItem('productData', JSON.stringify(productData));

    // // Reset the form inputs
    // setProductName('');
    // setProductCost('');
    // setProductDescription('');
    // setProductQuantity(1);
  };


  console.log(prod);

  return (
    <Flex justify="center" align="center">
      <Card width="70vw" height="70vh" direction="column" align="center">
        <Heading margin="10px">Edição de Produtos</Heading>

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
                  // type="number"
                  step="0.01"
                  min="0"
                  // pattern="^\d+(,\d{0,2})?$" // Pattern to accept comma decimal separator
                  lang="pt-BR" // Set the language to Brazilian Portuguese for correct number formatting
                />
                <Input
                  placeholder="Descrição do produto"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                />
                <p>Quantidade do produto</p>
                <NumberInput
                  step={1}
                  defaultValue={1}
                  min={0}
                  max={30}
                  size="sm"
                  maxW="10%"
                  value={productQuantity}
                  onChange={(value) => setProductQuantity(value)}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            <Button type='submit'  size="lg">Enviar</Button>
            </form>
          </Flex>

          <Flex width="20vw" direction="column" justify="space-between" align="center">
            <img src={imagemItem} alt="Description of the image" />
          </Flex>

          
        </Flex>
      </Card>
    </Flex>
  );
};

export default Edit;
