import React from 'react';
import styles from '../styles/TechStack.module.css';

interface Props {
  header: string
  techStack: string[]
}

const TechStack: React.FC<Props> = ({
  header,
  techStack,
}) => {
  return (
    <div>
      <h4 className={styles.header}>{header}</h4>
      <div>
        {techStack.map((tech) => (
          <span key={tech}>
            <span className={styles.techItem}>
              {tech}
            </span>
            {' '}
          </span>
        ))}
      </div>
    </div>
  )
};

export default TechStack;
