import aboutBg from '../assets/about me.png'; 
import profileImage from '../assets/capadev.jpg'; 

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.aboutBox}>
        <div style={styles.titleBox}>
          <p style={styles.titleText}>About me</p>
        </div>
        <p style={styles.introText}>
          <span style={styles.greenText}>Hello!</span><br />
          My name is Joane, and I specialize in web development using{' '}
          <span style={styles.greenText}>HTML, CSS, JavaScript, React,</span> and more.
          I'm a highly motivated individual and an eternal optimist dedicated to writing
          clear, concise, and robust code that truly works. I'm always striving to learn
          and improve <span style={styles.greenText}>continuously.</span><br /><br />
          When I'm not coding, I'm either writing blogs, reading, or diving into new hands-on art
          projects like photography. I enjoy challenging my perspectives and belief systems to see
          the world through new eyes.<br /><br />
          My skills: <span style={styles.greenText}>HTML, CSS, JavaScript, PHP, Python, Node.js, React, TypeScript, UX/UI</span>
        </p>
        <img src={profileImage} alt="Woman on computer" style={styles.profileImage} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: `url(${aboutBg})`,
    backgroundSize: 'cover',
    padding: '64px 0', 
    display: 'flex',
    justifyContent: 'center',
  },
  aboutBox: {
    backgroundColor: '#292F36',
    width: '352px',
    padding: '32px',
    textAlign: 'center',
    color: '#FFFF',
    fontFamily: 'IBM Plex Mono, monospace',
  },
  titleBox: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 16px',
    backgroundColor: '#292F36',
    border: '2px solid #98FAEC',
    borderRadius: '20px 20px 0 20px', 
    marginBottom: '32px',
  },
  titleText: {
    fontSize: '18px',
    color: '#98FAEC',
  },
  introText: {
    fontSize: '14px',
    lineHeight: '1.6',
    marginBottom: '32px',
  },
  greenText: {
    color: '#98FAEC', 
    fontWeight: '500',
  },
  profileImage: {
    width: '272px',
    height: '364px',
    margin: '64px auto', 
    display: 'block',
  },
};

export default About;
