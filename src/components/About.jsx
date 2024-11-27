import { Box, Text, Flex, Image } from '@chakra-ui/react';
import aboutBg from '../assets/about me.png';
import profileImage from '../assets/capadev.jpg';

const About = () => {
  return (
    <Box
      as="section"
      backgroundColor="#1A1A1A"
      backgroundImage={`url(${aboutBg})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      width="100%"
      minHeight="100vh"
      px={{ base: '16px', md: '128px' }}
      py="64px"
      display="flex"
      justifyContent="center"
    >
      <Flex
        direction="column"
        alignItems={{ base: 'center', md: 'flex-start' }}
        textAlign={{ base: 'center', md: 'left' }}
        bg="#292F36"
        p="32px"
        borderRadius="16px"
        maxW="800px"
        color="#FFF"
        fontFamily="IBM Plex Mono, monospace"
      >
        {/* Botão "About Me" */}
        <Box
          as="div"
          width={{ base: '224px', md: '367px' }}
          height={{ base: '68px', md: '104px' }}
          fontSize="64px"
          fontWeight="normal"
          fontFamily="Ubuntu, sans-serif"
          color="#98FAEC"
          bg="transparent"
          border="2px solid #98FAEC"
          borderRadius="40px 40px 0 40px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb="32px"
          alignSelf={{ base: 'center', md: 'flex-start' }}
        >
          About Me
        </Box>

        {/* Texto de introdução */}
        <Text
          fontSize={{ base: '14px', md: '32px' }}
          lineHeight="1.6"
          mb="32px"
        >
          <Text as="span" color="#98FAEC" fontWeight="500">
            Hello!
          </Text>
          <br />
          My name is Joane, and I specialize in web development using{' '}
          <Text as="span" color="#98FAEC" fontWeight="500">
            HTML, CSS, JavaScript, React,
          </Text>{' '}
          and more. I'm a highly motivated individual and an eternal optimist
          dedicated to writing clear, concise, and robust code that truly
          works. I'm always striving to learn and improve{' '}
          <Text as="span" color="#98FAEC" fontWeight="500">
            continuously.
          </Text>
          <br />
          <br />
          When I'm not coding, I'm either writing blogs, reading, or diving
          into new hands-on art projects like photography. I enjoy challenging
          my perspectives and belief systems to see the world through new eyes.
          <br />
          <br />
          <Text as="span" color="#98FAEC" fontWeight="500">
            My skills:
          </Text>{' '}
          HTML, CSS, JavaScript, PHP, Python, Node.js, React, TypeScript, UX/UI
        </Text>

        {/* Imagem */}
        <Image
          src={profileImage}
          alt="Joane working"
          width={{ base: '272px', md: '364px' }}
          height="auto"
          borderRadius="8px"
          alignSelf={{ base: 'center', md: 'flex-start' }}
        />
      </Flex>
    </Box>
  );
};

export default About;