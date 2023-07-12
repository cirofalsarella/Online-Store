import { Card, Heading, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import imagemItem from "../../assets/proMeal.png"
import {useContext} from "react";
import {loginContext} from "../../App";

const ItemCard = (props) => {
    const data = props.src

    const selectItem = () =>{
        localStorage.setItem("selectedProduct", data.id);
    };

    const setLoginStatus = useContext(loginContext)[0]

    if (setLoginStatus === 2) {
        return (
            <Link to={"/edit"} onClick={selectItem}>
                <Card height={"300px"} direction={"column"} align={"center"} justify={"space-around"}>
                    <Image src={imagemItem} width={"60%"}/>
                    <Heading size="md" align={"center"}>{data.name}</Heading>
                    <Text>R$ {data.price.toFixed(2)}</Text>
                </Card>
            </Link>
        )
    }
    else {
        return (
            <Link to={"/item"} onClick={selectItem}>
                <Card height={"300px"} direction={"column"} align={"center"} justify={"space-around"}>
                    <Image src={imagemItem} width={"60%"}/>
                    <Heading size="md" align={"center"}>{data.name}</Heading>
                    <Text>R$ {data.price.toFixed(2)}</Text>
                </Card>
            </Link>
        )
    }
}

export default ItemCard;