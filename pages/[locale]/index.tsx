/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import type { GetStaticPaths, NextPage } from 'next';
import { GetStaticProps } from 'next';
import localizationMap from '../../localized-data';
import ILocalizedContent from '../../localized-data/interfaces';
import LocalizedContentProvider from '../../components/LocalizedContentProvider';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import meImage from '../../public/me.jpg';
import Profile from '../../components/Profile';
import Content from '../../components/Content';
import styles from '../../styles/IndexPage.module.css';
import AboutMe from '../../components/AboutMe';
import Languages from '../../components/Languages';
import ExperienceTimeline from '../../components/ExperienceTimeline';
import LocaleSelector from '../../components/LocaleSelector';
import Head from 'next/head';
import faviconImage from '../../public/favicon.ico';

type Locale = keyof typeof localizationMap;

interface StaticProps {
  localizedContent: ILocalizedContent,
  locale: Locale,
  lastUpdatedSerialized: string
}

const Home: NextPage<StaticProps> = ({ localizedContent, locale, lastUpdatedSerialized }) => {
  const lastUpdated = React.useMemo(() => new Date(lastUpdatedSerialized), [lastUpdatedSerialized])

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Istok+Web:wght@400;700&family=Montserrat:wght@400;500&display=swap"
          rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
        <title>{ localizedContent.pageContent.pageTitle }</title>
        <link rel="shortcut icon" href={faviconImage.src} type="image/x-icon" />
      </Head>
      <LocalizedContentProvider localizedContent={localizedContent}>
        <Layout>
          <Sidebar imageSrc={meImage.src} />
          <Content>
            <LocaleSelector currentLocale={locale} />
            <header className={styles.pageBlock}>
              <Profile />
            </header>
            <hr />
            <section className={styles.pageBlock}>
              <AboutMe />
            </section>
            <hr />
            <section className={styles.pageBlock}>
              <Languages />
            </section>
            <hr />
            <section>
              <ExperienceTimeline lastUpdated={lastUpdated} />
            </section>
          </Content>
        </Layout>
      </LocalizedContentProvider>
    </>
  )
}

export default Home

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(localizationMap).map((locale) => ({ params: { locale } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  const locale = context.params!['locale'] as Locale;

  return {
    props: {
      localizedContent: localizationMap[locale]!,
      locale: locale,
      lastUpdatedSerialized: (new Date()).toJSON()
    }
  }
}