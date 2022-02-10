import React from 'react';
import ILocalizedContent from '../localized-data/interfaces';

export const LocalizedContentContext = React.createContext<ILocalizedContent | undefined>(undefined);

interface Props {
  localizedContent: ILocalizedContent
}

const LocalizedContentProvider: React.FC<Props> = ({ children, localizedContent }) => {
  return (
    <LocalizedContentContext.Provider value={localizedContent}>
      { children }
    </LocalizedContentContext.Provider> 
  )
};

export default LocalizedContentProvider;
