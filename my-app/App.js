import React from "react";
import { NativeBaseProvider, Box, Button, Center } from "native-base";

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
          bgColor={"purple.400"}
          size={100}
          
        >         
         </Button>
      </Box>

      <Center
      bg
      >
        
      </Center>
    </NativeBaseProvider>
    
  );
}
