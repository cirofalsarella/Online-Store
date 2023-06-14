import { Card, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import imagemItem from "../../../assets/proMeal.png"
import { useState } from "react"

const HistoricCard = (props) => {
  const data = props.data
  const [rating, setRating] = useState(4)

  return (
    <Flex justify={"space-between"} padding={"15px 50px"}>
      <Image width="100px" src={imagemItem}/>
      <Flex direction={"column"} justify={"space-around"}>
        <Heading size={"md"}>{data.title}</Heading>
        <Text>{data.formattedPrice}</Text>
        <Text>Quantidade: 3</Text>
      </Flex>
      <Flex justify={"center"} align={"center"}>
        <StarIcon color={rating >= 1 ? "gold" : "grey"} onClick={ e => setRating(1)}/>
        <StarIcon color={rating >= 2 ? "gold" : "grey"} onClick={ e => setRating(2)}/>
        <StarIcon color={rating >= 3 ? "gold" : "grey"} onClick={ e => setRating(3)}/>
        <StarIcon color={rating >= 4 ? "gold" : "grey"} onClick={ e => setRating(4)}/>
        <StarIcon color={rating >= 5 ? "gold" : "grey"} onClick={ e => setRating(5)}/>
      </Flex>
    </Flex>
  );
}

const Historic = () => {
  const productList = JSON.parse(localStorage.getItem('productList'));

  return(
      <Flex justify={"center"}>
        <Card direction={"column"} width={"80vw"}>
          {
            productList.map((product) => {
              return <HistoricCard data={product}/>
            })
          }
        </Card>
      </Flex>
  )
}

export default Historic