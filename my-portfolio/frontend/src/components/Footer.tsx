import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box
      alignItems="center"
      height={{ base: "4rem", md: "8rem" }} 
      width="100%"
      px="4"
      bg="blue.500"
      color="white"
    >
        <Text>This website uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.</Text>
    </Box>
  );
};

export default Footer;
