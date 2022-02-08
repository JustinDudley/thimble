import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

export const Home: React.FC = () => {
   return (
      <div className={styles.homePageViewHeight}>
         <div className={styles.homePage}>
            <div className={styles.welcome}>Welcome to THIMBLE</div>
            <nav className={styles.navButton}>
               <Link to="/keyboard" className={styles.linkInHome}>
                  start training
               </Link>
            </nav>
         </div>
      </div>
   );
};
