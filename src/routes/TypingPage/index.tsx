import React from 'react';
import { SampleSection } from './components/SampleSection';
import { HomeLinkSection } from './components/HomeLinkSection';
import { KeyboardDisplay } from './components/KeyboardDisplay';
import { UserConsole } from './components/UserConsole';

import styles from './style.module.css';

export const TypingPage: React.FC = () => {
   return (
      <div className={styles.typingPageViewHeight}>
         <div className={styles.typingPage}>
            <HomeLinkSection />
            <SampleSection />
            <UserConsole />
            <KeyboardDisplay />
         </div>
      </div>
   );
};
