import React from 'react';
import PropTypes from 'prop-types';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaPhp, FaDatabase } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si'; 

const skills = [
  { icon: <FaHtml5 />, label: 'HTML', color: '#E34F26' },
  { icon: <FaCss3Alt />, label: 'CSS', color: '#1572B6' },
  { icon: <FaJs />, label: 'JavaScript', color: '#F7DF1E' },
  { icon: <FaReact />, label: 'React', color: '#61DAFB' },
  { icon: <SiTypescript />, label: 'TypeScript', color: '#3178C6' },
  { icon: <FaPhp />, label: 'PHP', color: '#777BB4' },
  { icon: <FaPython />, label: 'Python', color: '#3776AB' },
  { icon: <FaNodeJs />, label: 'Node.js', color: '#339933' },
  { icon: <FaDatabase />, label: 'SQL', color: '#336791' },
  { icon: <FaReact />, label: 'UX/UI', color: '#292F36' }, 
];

const SkillCircle = ({ icon, color }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{
        ...styles.skillCircle,
        backgroundColor: color,
        transform: isHovered ? 'scale(1.1)' : 'scale(1)', 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.iconContainer}>{icon}</div>
    </div>
  );
};

SkillCircle.propTypes = {
  icon: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

const Skills = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Skills</h2>
      <p style={styles.subtitle}>I am striving to <span style={styles.highlight}>never stop learning</span> and improving</p>
      <div style={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.skillWrapper}>
            <SkillCircle icon={skill.icon} color={skill.color} />
            <p style={styles.skillLabel}>{skill.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#292F36',
    backgroundImage: 'url(/path/to/your/code-bg.png)', // Substitua pelo caminho da imagem de código com baixa opacidade
    backgroundSize: 'cover',
    padding: '64px 0',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    color: '#98FAEC',
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#FFFF',
    marginBottom: '32px',
  },
  highlight: {
    color: '#98FAEC',
  },
  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
  },
  skillWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  skillCircle: {
    width: '112px',
    height: '112px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFF',
    transition: 'transform 0.3s ease', // Animação suave
  },
  iconContainer: {
    fontSize: '48px', // Tamanho do ícone
  },
  skillLabel: {
    marginTop: '8px',
    fontSize: '14px',
    color: '#FFFF',
  },
};

export default Skills;
