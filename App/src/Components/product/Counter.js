import { NumberInput, NumberInputField, NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper} from '@chakra-ui/react'


const Counter  = () => {

    return (
        <NumberInput step={1} defaultValue={1} min={0} max={30} size='sm' maxW='10%'>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
        </NumberInput>
    );
}

export default Counter;