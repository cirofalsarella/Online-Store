import { Button, Card, Flex, FormControl, FormLabel, Heading, Input, Textarea, Avatar } from "@chakra-ui/react"

const Edit = () => {
  return (
    <Flex justify={"center"} align={"center"}>
      <Card width={"70vw"} height={"70vh"} direction={"column"} align={"center"}>
        <Heading margin={"10px"}>Edição de Produtos</Heading>

        <Flex justify={"space-around"}>
          <Flex width={"40vw"} height={"55vh"} direction={"column"} justify={"space-around"}>
            <FormControl>
              <Input placeholder={"Nome do produto"}></Input>
              <Input placeholder={"Custo do produto"}></Input>
              <Input placeholder={"Descrição do produto"}></Input>
            </FormControl>
          </Flex>

          <Flex width={"20vw"} direction={"column"} justify={"space-between"} align={"center"}>
            <Avatar />
            <Button size={"lg"}>Atualizar</Button>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
}
export default Edit;
