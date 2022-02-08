import React from 'react';
import { SampleRegion } from './components/SampleRegion';
import { HomeLink } from './components/HomeLink';
import { KeyboardDisplay } from './components/KeyboardDisplay';
import { UserRegion } from './components/UserRegion';

import styles from './style.module.css';

export const TypingPage: React.FC = () => {
   return (
      <div className={styles.typingPageViewHeight}>
         <div className={styles.typingPage}>
            <HomeLink />
            <SampleRegion />
            <UserRegion />
            <KeyboardDisplay />
         </div>
      </div>
   );
};
