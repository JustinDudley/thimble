import React from 'react';
import { SampleRegion } from './components/SampleRegion';
import { HomeLink } from './components/HomeLink';
import { KeyboardRegion } from './components/KeyboardRegion';

import styles from './style.module.css';

export const Keyboard: React.FC = () => {
   return (
      <div className={styles.keyboardPageViewHeight}>
         <div className={styles.keyboardPage}>
            <HomeLink />
            <SampleRegion />
            <KeyboardRegion />
         </div>
      </div>
   );
};
