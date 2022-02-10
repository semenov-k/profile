import React from 'react';
import styles from '../styles/ExperienceTimelineItem.module.css';
import { IExperienceTimelineItem } from '../localized-data/interfaces';

interface Props extends IExperienceTimelineItem {}

const ExperienceTimelineItem: React.FC<Props> = ({
  companyName,
  year,
  description,
  details,
}) => {
  return (
    <div>
      <div className={styles.companyName}>
        {companyName}
      </div>
      <div className={styles.year}>
        {year}
      </div>
      <div className={styles.description}>
        { description }
      </div>
      <ul className={styles.details}>
        { details.map((detail, index) => (
          <li key={index}>{ detail }</li>
        )) }
      </ul>
    </div>
  );
};

export default ExperienceTimelineItem;
