import { Box, Text, Image, Link, Button, Icon } from '@chakra-ui/react';
import { EmailIcon, InfoOutlineIcon, DownloadIcon, LinkIcon } from '@chakra-ui/icons';

const Hero = () => {
  return (
    <Box
      position="relative"
      width="350px"
      height="620px"
      backgroundImage="url('/src/assets/fundohero.png')"
      backgroundPosition="center"
      backgroundSize="cover"
      borderRadius="30px"
      padding="24px"
      margin="64px 20px"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {/* Imagem de perfil centralizada e arredondada dentro do fundohero */}
      <Box
        position="absolute"
        top="50px"
        left="50%"
        transform="translate(-50%, -50%)"
        borderRadius="full"
        border="4px solid #12F7D6"
        overflow="hidden"
        width="100px"
        height="100px"
        backgroundColor="#292F36"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex="1"
      >
        <Image
          src="/src/assets/profile.png"
          width="100%"
          height="100%"
          objectFit="cover"
          borderRadius="full"
        />
      </Box>

      {/* Informações do perfil */}
      <Box marginTop="80px" textAlign="center" zIndex="0">
        <Text color="#FFF" fontSize="26px" fontWeight="bold" marginBottom="8px">
          JOANE
        </Text>
        <Text color="#FFF" fontSize="14px" marginBottom="16px">
          Full-stack developer-UXUI
        </Text>
        <Box display="flex" flexDirection="column" alignItems="center" gap="12px" marginBottom="24px">
          <Box display="flex" alignItems="center" color="#12F7D6">
            <EmailIcon marginRight="8px" />
            <Text color="#FFF" fontSize="14px">joanedesenvolvimento@gmail.com</Text>
          </Box>
          <Box display="flex" alignItems="center" color="#12F7D6">
            <InfoOutlineIcon marginRight="8px" />
            <Text color="#FFF" fontSize="14px">Belo Horizonte - Brazil</Text>
          </Box>
          <Box display="flex" alignItems="center" color="#12F7D6">
            <Icon viewBox="0 0 24 24" marginRight="8px">
              <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z" fill="currentColor" />
            </Icon>
            <Text color="#FFF" fontSize="14px">Full-time / Freelancer</Text>
          </Box>
          <Box display="flex" alignItems="center" color="#12F7D6">
            <LinkIcon marginRight="8px" />
            <Link href="https://www.sinantokmak.com" isExternal color="#12F7D6" fontSize="14px">
              www.sinantokmak.com
            </Link>
          </Box>
        </Box>

        {/* Tecnologias */}
        <Box display="flex" gap="12px" justifyContent="center" marginBottom="24px">
          {['HTML', 'CSS', 'JS', 'REACT'].map((tech) => (
            <Box
              key={tech}
              backgroundColor="#12F7D6"
              padding="6px 14px"
              borderRadius="12px"
              color="#000"
              fontWeight="bold"
              fontSize="14px"
            >
              {tech}
            </Box>
          ))}
        </Box>

        {/* Botão para download do CV */}
        <Button
          backgroundColor="#12F7D6"
          color="#000"
          borderRadius="32px"
          padding="10px 28px"
          rightIcon={<DownloadIcon />}
          _hover={{ backgroundColor: '#10E7C6' }}
          fontSize="16px"
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
