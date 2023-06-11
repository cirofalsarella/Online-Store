import { ItemCard } from "../../../Components";
import { Flex, Wrap, WrapItem } from "@chakra-ui/react"


const Landing = () => {
  const selected = localStorage.getItem("selectedProduct");
  
  let productList = [];
  let products = localStorage.getItem('productList');
  
  if(products !== null){
      productList = JSON.parse(products);
  }


  return (
    <Flex direction="column">
        <Wrap spacing={"20px"} justify={"center"}>
          {productList.map((product) => {
            return(
              <WrapItem width={"200px"}>
                <ItemCard src={product}/>
              </WrapItem>
            )
          })}
        </Wrap>
    </Flex>
  );
}

export default Landing;
