import React from 'react';
import { Box, Link, Menu, MenuButton, MenuList, MenuItem, IconButton, Image } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import home_AM from '../assets/home_AM.png';

const Header: React.FC = () => {
  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height={{ base: "4rem", md: "8rem" }} 
      width="100%"
      px="4"
      bg="blue.500"
      color="white"
    >
      {/* Home Link/Button */}
      <Link href="/">
        <Image src={home_AM} alt="Home" htmlWidth="50px" htmlHeight="auto" /> 
      </Link>

      {/* Expandable Menu */}
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          variant="outline"
          aria-label="Options"
        />
        <MenuList>
          <MenuItem as={Link} href="/music">Music</MenuItem>
          <MenuItem as={Link} href="/books">Books</MenuItem>
          <MenuItem as={Link} href="/tv-movies">TV/Movies</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Header;
