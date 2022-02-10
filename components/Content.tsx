import React from 'react';
import styles from '../styles/Content.module.css';

const Content: React.FC = ({ children }) => {
  return <article className={styles.content}>{ children }</article>
}

export default Content;
