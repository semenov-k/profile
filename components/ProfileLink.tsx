import React from 'react';
import styles from '../styles/ProfileLink.module.css';
import { useLocalizedContent } from '../hooks/i18n';

interface Props {
  imageSrc: string
  link: string
  linkText?: string
  hiddenOnStart?: boolean
}

const ProfileLink: React.FC<Props> = ({ imageSrc, link, linkText, hiddenOnStart = false }) => {
  const [hidden, setHidden] = React.useState(hiddenOnStart);
  const { uiContent } = useLocalizedContent();

  const _linkText = linkText || link;

  const handleOnShowClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setHidden(!hidden);
  }

  return (
    <div className={styles.container}>
      <span className={styles.iconWrapper}>
        <img className={styles.icon} src={imageSrc} alt="profile icon" width={24} height={24} />
      </span>
      {!hidden
        ?
        <a href={link}>{_linkText}</a>
        :
        <button
          className={styles.showButton}
          onClick={handleOnShowClick}
        >
          {uiContent.clickToSee}
        </button>
      }
    </div>
  )
};

export default ProfileLink;
