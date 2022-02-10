import React from 'react';
import { useLocalizedContent } from '../hooks/i18n';
import commonStyles from '../styles/Common.module.css';
import styles from '../styles/ExperienceTimeline.module.css';
import ExperienceTimelineItem from './ExperienceTimelineItem';

interface Props {
  lastUpdated: Date
}

const ExperienceTimeline: React.FC<Props> = ({ lastUpdated }) => {
  const { uiContent, pageContent } = useLocalizedContent();

  return (
    <div>
      <div className={styles.header}>
        <h5 className={commonStyles.blockHeader}>{uiContent.workExperience}</h5>
        <span className={styles.lastUpdated}>
          {`${uiContent.lastUpdated}: ${lastUpdated.toLocaleDateString()}`}
        </span>
      </div>
      <div className={styles.timelineContent}>
        {pageContent.experienceTimeline.map((expItem) => (
          <div key={expItem.companyName} className={styles.timelineItem}>
            <ExperienceTimelineItem
              key={expItem.companyName}
              {...expItem}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
