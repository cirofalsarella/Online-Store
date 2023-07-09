import { Card, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import imagemItem from "../../../assets/proMeal.png"
import { useState } from "react"

import { getHistoric, updateHistoric } from "../../../services"

const HistoricCard = (product) => {
  const data = product.data
  console.log(data)
  const [rating, setRating] = useState(product.data.review)

  return (
    <Flex justify={"space-between"} padding={"15px 50px"}>
      <Image width="100px" src={imagemItem}/>
      <Flex direction={"column"} justify={"space-around"}>
        <Heading size={"md"}>{product.data.name}</Heading>
        <Text>{product.data.price}</Text>
      </Flex>
      <Flex justify={"center"} align={"center"}>
        <StarIcon cursor={"pointer"} color={rating >= 1 ? "gold" : "grey"} onClick={ e => setRating(1)}/>
        <StarIcon cursor={"pointer"} color={rating >= 2 ? "gold" : "grey"} onClick={ e => setRating(2)}/>
        <StarIcon cursor={"pointer"} color={rating >= 3 ? "gold" : "grey"} onClick={ e => setRating(3)}/>
        <StarIcon cursor={"pointer"} color={rating >= 4 ? "gold" : "grey"} onClick={ e => setRating(4)}/>
        <StarIcon cursor={"pointer"} color={rating >= 5 ? "gold" : "grey"} onClick={ e => setRating(5)}/>
      </Flex>
    </Flex>
  );
}

const Historic = () => {
  const [productList, setProductList] = useState([])
  getHistoric(0).then(data => setProductList(data))

  return(
    <Card justify={"center"} align={"center"}>
      <Heading>Histórico de Compras</Heading>

      <Flex justify={"center"}>
        <Card direction={"column"} width={"80vw"}>
          {
            productList.map((product) => {
              return <HistoricCard data={product}/>
            })
          }
        </Card>
      </Flex>
    </Card>
  )
}

export default Historic