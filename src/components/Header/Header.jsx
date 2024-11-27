import { Box, Text, Link, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  return (
    <Box
      as="header"
      width="100%"
      height="68px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#1A1A1A"
      fontFamily="'IBM Plex Mono', monospace"
    >
      <Box
        width="100%"
        maxW="1664px"
        px="128px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Logo e Nome - Lado Esquerdo */}
        <Box display="flex" alignItems="center">
          <Text color="#12F7D6" fontSize="16px" marginRight="8px">
            &lt;C/&gt;
          </Text>
          <Text color="#FFF" fontSize="16px">
            JoaneAlves
          </Text>
        </Box>

        {/* Menu, Search e Ícones - Lado Direito */}
        <Box display="flex" alignItems="center">
          {/* Links de Navegação */}
          <Box display="flex" alignItems="center" ml="123px">
            <Link
              href="#"
              color="#12F7D6"
              fontSize="16px"
              marginRight="32px"
            >
              Home
            </Link>
            <Link
              href="#"
              color="#FFF"
              fontSize="16px"
              marginRight="64px"
            >
              Uxui
            </Link>
          </Box>

          {/* Campo de Busca */}
          <InputGroup maxW="200px" mr="64px">
            <InputLeftElement pointerEvents='none'>
              <SearchIcon color='gray.500' />
            </InputLeftElement>
            <Input
              bg="white"
              borderRadius="24px"
              placeholder="Buscar..."
              _placeholder={{ color: 'gray.500' }}
            />
          </InputGroup>

          {/* Ícones de Redes Sociais */}
          <Box display="flex" alignItems="center" gap="32px">
            <Box
              as={FaLinkedin}
              color="#12F7D6"
              size="20px"
              cursor="pointer"
            />
            <Box
              as={FaGithub}
              color="#12F7D6"
              size="20px"
              cursor="pointer"
            />
            <Box
              as={FaWhatsapp}
              color="#12F7D6"
              size="20px"
              cursor="pointer"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;