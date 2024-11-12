
import { Box, Text, Link} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Header = () => {
  return (
    <Box
      width="390px"
      height="68px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="0 16px"
      backgroundColor="#1A1A1A"
      fontFamily="'IBM Plex Mono', monospace"
    >
      <Text color="#12F7D6" fontSize="16px" fontWeight="regular">
        &lt;C/&gt; JoaneAlves
      </Text>
      <Box display="flex" alignItems="center">
        <Link
          $1 textDecoration="none"
          href="#"
          color="#12F7D6"
          fontSize="16px"
          marginRight="24px"
          _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
        >
          Home
        </Link>
        <Link 
          $1 textDecoration="none"
          href="#"
          color="#FFF"
          fontSize="16px"
          marginRight="16px"
          _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
        >
          Uxui
        </Link>
        <SearchIcon color="#FFF" boxSize={17} />
      </Box>
    </Box>
  );
};

export default Header;