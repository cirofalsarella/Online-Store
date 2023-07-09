import { Card, Heading, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import imagemItem from "../../assets/proMeal.png"

const ItemCard = (props) => {
    const data = props.src

    const selectItem = () =>{
        localStorage.setItem("selectedProduct", 3);
    };

    return (
        <Link to={"/item"} onClick={selectItem}>
            <Card height={"300px"} direction={"column"} align={"center"} justify={"space-around"}>
                <Image src={imagemItem} width={"60%"}/>
                <Heading size="md" align={"center"}>{data.title}</Heading>
                <Text>{data.formattedPrice}</Text>
            </Card>
        </Link>
    )
}

export default ItemCard;