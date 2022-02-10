import React from 'react';
import styles from '../styles/Sidebar.module.css';
import TechStack from '../components/TechStack';
import { useLocalizedContent } from '../hooks/i18n';

interface Props {
  imageSrc: string
}

const Sidebar: React.FC<Props> = ({
  imageSrc
}) => {
  const { uiContent, pageContent } = useLocalizedContent();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt="my photo"
          src={imageSrc}
          height={150}
          width={100}
        />
      </div>
      <div className={styles.stack}>
        <TechStack
          key='dev_approaches'
          header={uiContent.developmentApproaches}
          techStack={pageContent.stack.developmentApproaches}
        />
      </div>
      <div className={styles.stack}>
        <TechStack
          key='frontend'
          header={uiContent.frontend}
          techStack={pageContent.stack.frontend}
        />
      </div>
      <div className={styles.stack}>
        <TechStack
          key='backend'
          header={uiContent.backend}
          techStack={pageContent.stack.backend}
        />
      </div>
      <div className={styles.stack}>
        <TechStack
          key='dev_ops'
          header={uiContent.devOps}
          techStack={pageContent.stack.devOps}
        />
      </div>
    </aside>
  )
};

export default Sidebar;
