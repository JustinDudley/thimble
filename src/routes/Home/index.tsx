import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

export const Home: React.FC<{ appBarAdjustment: string }> = ({
  appBarAdjustment,
}) => (
  <div id={styles.homeViewHeight}>
    <div id={styles.homePage} style={{ height: appBarAdjustment }}>
      <div id={styles.welcome}>Welcome to THIMBLE</div>
      <nav id={styles.navButton}>
        <Link to="/keyboard" id={styles.linkInHome}>
          get started
        </Link>
      </nav>
    </div>
  </div>
);
