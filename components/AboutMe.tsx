import React from 'react';
import { useLocalizedContent } from '../hooks/i18n';
import commonStyles from '../styles/Common.module.css';
import styles from '../styles/AboutMe.module.css';

const AboutMe: React.FC = () => {
  const { uiContent, pageContent } = useLocalizedContent();

  return (
    <div>
      <h5 className={commonStyles.blockHeader}>{ uiContent.about }</h5>
      { pageContent.aboutMe.map((aboutMeBlock, index) => (
        <p key={index} className={styles.descriptionBlock}>{ aboutMeBlock }</p>
      )) }
    </div>
  );
}

export default AboutMe;
