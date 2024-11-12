export const heroStyles = {
  container: {
    bg: 'background',
    minH: '500px',
    pt: '40px',
    px: '24px'
  },
  profileImage: {
    border: '2px solid',
    borderColor: 'highlight',
    borderRadius: 'full',
    width: '120px',
    height: '120px'
  },
  title: {
    fontFamily: 'IBM Plex Mono',
    fontWeight: 'bold',
    fontSize: '28px',
    color: 'text',
    mt: '24px'
  },
  subtitle: {
    fontFamily: 'IBM Plex Mono',
    fontSize: '16px',
    color: 'text',
    mt: '16px'
  },
  location: {
    color: 'text',
    fontSize: '16px',
    fontFamily: 'IBM Plex Mono',
    display: 'flex',
    alignItems: 'center',
    mt: '8px'
  },
  badge: {
    bg: '#292F36',
    color: 'highlight',
    fontSize: '14px',
    fontFamily: 'IBM Plex Mono',
    mr: '8px',
    mt: '16px'
  },
  downloadButton: {
    bg: 'highlight',
    color: 'background',
    fontFamily: 'IBM Plex Mono',
    fontSize: '16px',
    fontWeight: 'bold',
    mt: '24px',
    _hover: {
      bg: 'highlight',
      opacity: 0.9,
      transform: 'translateY(-2px)',
      transition: 'all 0.3s ease'
    }
  }
} 