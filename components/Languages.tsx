import React from 'react';
import { useLocalizedContent } from '../hooks/i18n';
import commonStyles from '../styles/Common.module.css';

const Languages: React.FC = () => {
  const { uiContent, pageContent } = useLocalizedContent();

  return (
    <div>
      <h5 className={commonStyles.blockHeader}>{ uiContent.languages }</h5>
      { pageContent.languages.map((language) => (
        <div key={language.name}>
          <strong>{ language.name }</strong> - { language.levelDescription }
        </div>
      )) }
    </div>
  );
};

export default Languages;
