import React from 'react';
import Link from 'next/link';
import localizationMap from '../localized-data';
import styles from '../styles/LocaleSelector.module.css';
import { useRouter } from 'next/router';

type Locale = keyof typeof localizationMap;

interface Props {
  currentLocale: Locale
}

const nameToLocaleMap: { [k: string]: Locale } = {
  'EN': 'en',
  'RU': 'ru',
};

const LocaleSelector: React.FC<Props> = ({ currentLocale }) => {
  const router = useRouter();

  return (
    <div className={styles.selector}>
      {Object.keys(nameToLocaleMap).map((localeName) => {
        const locale = nameToLocaleMap[localeName];
        if (locale === currentLocale) {
          return <span key={locale} className={styles.activeLocale}>{localeName}</span>;
        }

        return (
          <span key={locale}>
            <Link
              href={{
                pathname: router.pathname,
                query: { ...router.query, locale }
              }}
            >
              {localeName}
            </Link>
          </span>
        )
      })}
    </div>
  );
};

export default LocaleSelector;
