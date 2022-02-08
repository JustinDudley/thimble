import React from 'react';
import { SampleRegion } from './components/SampleRegion';
import { HomeLink } from './components/HomeLink';
import { KeyboardDisplay } from './components/KeyboardDisplay';
import { UserConsole } from './components/UserConsole';

import styles from './style.module.css';

export const TypingPage: React.FC = () => {
   return (
      <div className={styles.typingPageViewHeight}>
         <div className={styles.typingPage}>
            <HomeLink />
            <SampleRegion />
            <UserConsole />
            <KeyboardDisplay />
         </div>
      </div>
   );
};
