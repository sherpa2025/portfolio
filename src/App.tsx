import { ChakraProvider, Box, Text } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <Box>
        <Text fontFamily="body">Body Text with Raleway font</Text>
      </Box>
    </ChakraProvider>
  );
};

export default App;
