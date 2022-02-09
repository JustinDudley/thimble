import React from 'react';
import { SampleSection } from './components/SampleSection';
import { HomeLinkSection } from './components/HomeLinkSection';
import { KLWSWrapper } from './components/KLWSWrapper';

import styles from './style.module.css';

export const TypingPage: React.FC = () => {
   return (
      <div className={styles.typingPageViewHeight}>
         <div className={styles.typingPage}>
            <HomeLinkSection />
            <SampleSection />
            <KLWSWrapper />
         </div>
      </div>
   );
};
