import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

export const HomeLink: React.FC = () => {
   return (
      <nav>
         <Link to="/" className={styles.linkSection}>
            {'<-- back to Home Page'}
         </Link>
      </nav>
   );
};
