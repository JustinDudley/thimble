import React from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

export const HomeLinkSection: React.FC = () => {
   return (
      <nav>
         <Link to="/" id={styles.linkSection}>
            {'<-- back to Home Page'}
         </Link>
      </nav>
   );
};
