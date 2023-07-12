import { Card, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import imagemItem from "../../../assets/proMeal.png"
import { useEffect, useState } from "react"

import { getHistoric, addReview } from "../../../services"

const HistoricCard = (props) => {
  const product = props.product
  const [rating, setRating] = useState(product.review)
  useEffect(() => {
    addReview({userId: props.userId, itemId: product.id, review: rating})
  }, [rating])

  return (
    <Flex justify={"space-between"} padding={"15px 50px"}>
      <Image width="100px" src={imagemItem}/>
      <Flex direction={"column"} justify={"space-around"}>
        <Heading size={"md"}>{product.name}</Heading>
        <Text>R$ {product.price.toFixed(2)}</Text>
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

const Historic = (userId) => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    getHistoric(userId).then(data => setProductList(data))
  }, [])

  return(
    <Card justify={"center"} align={"center"}>
      <Heading>Histórico de Compras</Heading>

      <Flex justify={"center"}>
        <Card direction={"column"} width={"80vw"}>
          {
            productList.map((product) => {
              return <HistoricCard product={product} userId={userId}/>
            })
          }
        </Card>
      </Flex>
    </Card>
  )
}

export default Historic