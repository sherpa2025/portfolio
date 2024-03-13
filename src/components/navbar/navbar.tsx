import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex justifyContent="space-between" alignItems="center">
        <Link to="/">Home</Link>
        <Flex>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
