import React from 'react';
import ProfileLink from './ProfileLink';
import styles from '../styles/Profile.module.css';
import { useLocalizedContent } from '../hooks/i18n';
import githubIcon from '../public/github_icon.png';
import emailIcon from '../public/email_icon.png';

const Profile: React.FC = () => {
  const { pageContent } = useLocalizedContent();

  return (
    <div>
      <h1 className={styles.fullName}>{ pageContent.fullName }</h1>
      <h2 className={styles.role}>{ pageContent.role }</h2>
      <h3 className={styles.experience}>{ pageContent.experienceDescription }</h3>
      <ProfileLink 
        imageSrc={githubIcon.src} 
        link={pageContent.github}
      />
      <ProfileLink 
        imageSrc={emailIcon.src}
        link={`mailto:${pageContent.email}`}
        linkText={pageContent.email}
        hiddenOnStart
      />
    </div>
  );
};

export default Profile;
