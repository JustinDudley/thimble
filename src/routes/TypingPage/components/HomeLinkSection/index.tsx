import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

export const HomeLinkSection: React.FC = () => {
   return (
      <nav>
         <Link to="/" className={styles.homeLinkSection}>
            {'<-- back to Home Page'}
         </Link>
      </nav>
   );
};
