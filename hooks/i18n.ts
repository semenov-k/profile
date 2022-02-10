import React from 'react';
import { LocalizedContentContext } from '../components/LocalizedContentProvider';
import ILocalizedContent, { ILocalizedUIContent, ILocalizedPageContent } from "../localized-data/interfaces"

export const useLocalizedContent = (): ILocalizedContent => {
  const localizedContent = React.useContext(LocalizedContentContext);

  return localizedContent!
}
