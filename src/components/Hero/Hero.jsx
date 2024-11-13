import heroImage from '../../assets/heroImage.png'; 
const Hero = () => {
  return (
    <div style={styles.heroContainer}>
      <img src={heroImage} alt="Hero" style={styles.heroImage} />
      <h1 style={styles.mainTitle}>
        Hey<br />
        I’m <span style={styles.highlightText}>Joane</span>,<br />
        Full-stack developer
      </h1>
      <p style={styles.description}>
        I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,
      </p>
      <button style={styles.contactButton}>
        Let’s Talk
        <span style={styles.icon}>📧</span> 
      </button>
      <div style={styles.statsContainer}>
        <div style={styles.stat}>
          <p style={styles.statNumber}>4</p>
          <p style={styles.statText}>Programming<br />Language</p>
        </div>
        <div style={styles.stat}>
          <p style={styles.statNumber}>6</p>
          <p style={styles.statText}>Development<br />Tools</p>
        </div>
        <div style={styles.stat}>
          <p style={styles.statNumber}>3</p>
          <p style={styles.statText}>Years of<br />Experience</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  heroContainer: {
    width: '390px',
    margin: '64px 43px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#FFFF',
  },
  heroImage: {
    width: '330px',
    height: '520px',
    marginBottom: '32px',
  },
  mainTitle: {
    fontFamily: 'Ubuntu, sans-serif',
    fontSize: '32px',
    color: '#98FAEC',
    textAlign: 'center',
    marginBottom: '16px',
  },
  highlightText: {
    color: '#FFFF',
  },
  description: {
    fontFamily: 'IBM Plex Mono, monospace',
    fontSize: '16px',
    color: '#FFFF',
    textAlign: 'center',
    marginBottom: '24px',
  },
  contactButton: {
    fontFamily: 'IBM Plex Mono, monospace',
    fontSize: '32px',
    color: '#98FAEC',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '32px',
  },
  icon: {
    width: '24px',
    height: '24px',
    backgroundColor: 'grey',
    borderRadius: '50%',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '8px',
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px', 
    marginTop: '32px', 
  },
  stat: {
    display: 'flex', 
    alignItems: 'center', 
    gap: '8px', 
  },
  statNumber: {
    fontFamily: 'IBM Plex Mono, monospace',
    fontSize: '48px',
    fontWeight: '500',
    color: '#98FAEC', 
  },
  statText: {
    fontFamily: 'IBM Plex Mono, monospace',
    fontSize: '14px',
    color: '#FFFF',
  },
};

export default Hero;