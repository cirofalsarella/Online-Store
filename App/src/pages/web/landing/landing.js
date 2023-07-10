import { ItemCard } from "../../../Components";
import { Flex, Wrap, WrapItem } from "@chakra-ui/react"

import { getItem } from "../../../services"
import { useEffect, useState } from "react";

const Landing = () => {
 
  const [itemList, setItemList] = useState([])
  useEffect(() => {
    getItem().then(data => setItemList(data))
  }, [])

  return (
    <Flex direction="column">
        <Wrap spacing={"20px"} justify={"center"}>
          {itemList.map((item) => {
            return(
              <WrapItem width={"200px"}>
                <ItemCard src={item}/>
              </WrapItem>
            )
          })}
        </Wrap>
    </Flex>
  );
}

export default Landing;
