import { Box, Text, Image, Link, Flex } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import heroImage from '../../assets/heroImage.png';

const Hero = () => {
  return (
    <Box
      as="section"
      width="100%"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#1A1A1A"
      px={{ base: '16px', md: '128px' }}
    >
      <Flex
        direction="column"
        alignItems="center"
        gap={{ base: '32px', md: '48px' }}
        textAlign={{ base: 'center', md: 'left' }}
        width="100%"
        maxW="1440px"
      >
        {/* Imagem Centralizada */}
        <Box>
          <Image
            src={heroImage}
            alt="Hero"
            width={{ base: '200px', md: '300px' }}
            height={{ base: '300px', md: 'auto' }}
            borderRadius="full"
            objectFit="cover"
          />
        </Box>

        {/* Texto e Link */}
        <Box width="100%" maxW="600px">
          <Text
            as="h1"
            fontSize={{ base: '32px', md: '64px' }}
            color="#98FAEC"
            fontFamily="Ubuntu, sans-serif"
            lineHeight="1.2"
            mb="16px"
          >
            Hey<br />
            I’m <Text as="span" color="#FFF">Joane</Text>,<br />
            Full-stack developer
          </Text>
          <Text
            fontSize={{ base: '16px', md: '20px' }}
            color="#FFF"
            fontFamily="IBM Plex Mono, monospace"
            mb="24px"
          >
            I help business grow by crafting amazing web experiences. If you’re
            looking for a developer that likes to get stuff done,
          </Text>
          <Link
            href="mailto:joanedev@gmail.com"
            color="#98FAEC"
            fontSize="20px"
            fontWeight="bold"
            display="flex"
            alignItems="center"
            gap="8px"
            textDecoration="none"
            _hover={{ textDecoration: 'underline' }}
          >
            Let’s Talk
            <Box
              as="span"
              width="24px"
              height="24px"
              bg="rgba(152, 250, 236, 0.1)"
              borderRadius="full"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="#98FAEC"
              fontWeight="bold"
            >
              <EmailIcon />
            </Box>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
