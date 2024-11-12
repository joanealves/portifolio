export const headerStyles = {
  container: {
    bg: 'background',
    py: 4,
    borderBottom: '1px solid',
    borderColor: '#292F36'
  },
  logo: {
    color: 'highlight',
    fontSize: 'lg',
    fontFamily: 'IBM Plex Mono',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    _hover: {
      transform: 'translateY(-2px)',
      textShadow: '0 0 8px #12F7D6'
    }
  },
  navItem: {
    color: 'text',
    fontSize: 'md',
    fontFamily: 'IBM Plex Mono',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    _hover: {
      transform: 'translateY(-2px)',
      textShadow: '0 0 8px white'
    }
  },
  activeNavItem: {
    color: 'highlight',
    fontSize: 'md',
    fontFamily: 'IBM Plex Mono',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    _hover: {
      transform: 'translateY(-2px)',
      textShadow: '0 0 8px #12F7D6'
    }
  }
} 