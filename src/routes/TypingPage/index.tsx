import React from 'react';
import { SampleRegion } from './components/SampleRegion';
import { HomeLink } from './components/HomeLink';
import { KeyboardRegion } from './components/KeyboardRegion';
import { UserRegion } from './components/UserRegion';

import styles from './style.module.css';

export const TypingPage: React.FC = () => {
   return (
      <div className={styles.typingPageViewHeight}>
         <div className={styles.typingPage}>
            <HomeLink />
            <SampleRegion />
            <UserRegion />
            <KeyboardRegion />
         </div>
      </div>
   );
};
