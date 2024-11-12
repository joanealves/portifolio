import { Box, Flex, Text, Image, Button, Badge } from '@chakra-ui/react'
import { MdLocationOn } from 'react-icons/md'
import { heroStyles } from './Hero.styles'

const Hero = () => {
  const skills = ['HTML', 'CSS', 'JS', 'REACT']

  return (
    <Box as="section" {...heroStyles.container}>
      <Flex 
        direction="column" 
        align="center"
        maxW="390px"
        mx="auto"
      >
        <Image
          src="/sua-imagem.jpg"
          alt="Foto de perfil"
          {...heroStyles.profileImage}
        />
        
        <Text {...heroStyles.title}>
          Full-stack developer-UXUI
        </Text>

        <Text {...heroStyles.subtitle}>
          joanedesenvolvimento@gmail.com
        </Text>

        <Text {...heroStyles.location}>
          <MdLocationOn color="#12F7D6" size={20} style={{marginRight: '8px'}}/>
          Belo Horizonte - Brazil
        </Text>

        <Text {...heroStyles.subtitle}>
          Full-time / Freelancer
        </Text>

        <Flex wrap="wrap" justify="center">
          {skills.map((skill) => (
            <Badge key={skill} {...heroStyles.badge}>
              {skill}
            </Badge>
          ))}
        </Flex>

        <Button {...heroStyles.downloadButton}>
          Download CV
        </Button>
      </Flex>
    </Box>
  )
}

export default Hero 