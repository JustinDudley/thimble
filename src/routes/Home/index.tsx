import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

export const Home: React.FC<{ appBarAdjustment: string }> = ({ appBarAdjustment }) => {
   return (
      <div className={styles.homeViewHeight}>
         <div className={styles.homePage} style={{ height: appBarAdjustment }}>
            <div className={styles.welcome}>Welcome to THIMBLE</div>
            <nav className={styles.navButton}>
               <Link to="/keyboard" className={styles.linkInHome}>
                  get started
               </Link>
            </nav>
         </div>
      </div>
   );
};
