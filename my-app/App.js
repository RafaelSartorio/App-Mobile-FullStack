import React from "react";
import { NativeBaseProvider, Box, Button, Center, FormControl, Input } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
      >
        teste
        <Button
          bgColor={"red.500"}
          size={100}
        >teste
        </Button>

        <Center>
          <FormControl isRequired>
          <FormControl.Label>Digite a sua senha: </FormControl.Label>
          <Input type="password" placeholder="Coloque sua senha aqui"> </Input> 
          <FormControl.HelperText>* aqui serve para vc olocar a sua senha privada</FormControl.HelperText>
          </FormControl>
        </Center>
      </Box>



      {/* <Center bg="amber.300" _text={{
      color: "black",
      fontWeight: "bold"
    }} height={200} width={{
      base: 200,
      lg: 250
    }}>
        rafaer
      </Center> */}

    </NativeBaseProvider>
    
  );
}
