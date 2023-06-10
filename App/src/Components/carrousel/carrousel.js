import { useRef, useState, useEffect, Component } from "react"

import { Flex, Image } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"

const selectComponents = (allComponents, index, ammount) => {
    const selectedComponents = []
    for (let i=0; i<ammount; i++) {
        if (index > allComponents.length)  index = 0

        selectedComponents.push(allComponents[index])
        index += 1
    }

    return selectedComponents;
}


const Carroseul = (props) => {
    const images = props.images
    const size = props.size
    
    const elementRef = useRef();
    const [ammount, setAmmount] = useState(0);
    const [begin, setBegin] = useState(0);
   
    useEffect(() => {
      setAmmount(Math.floor(elementRef?.current?.clientWidth / size));
    }, [elementRef?.current?.clientWidth]);

    const decrementBegin = () => {
        if (begin === 0)  return
        setBegin(begin - 1);
    }

    const incrementBegin = () => {
        if (begin === ammount)  return
        setBegin(begin + 1);
    }

    return (
        <Flex align={"center"} justify={"space-around"} ref={elementRef}>
            <ArrowBackIcon boxSize={"20"} onClick={decrementBegin} style={{cursor:'pointer'}}/>
                <Flex>
                    { 
                        selectComponents(images, begin, ammount-1).map((components) => 
                            { return component })
                    }
                </Flex>
            <ArrowForwardIcon boxSize={"20"} onClick={incrementBegin} style={{cursor:'pointer'}}/>
        </Flex>
      );
  }
  
  export default Carroseul;
  