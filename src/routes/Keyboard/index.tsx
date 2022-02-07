import React from 'react';
import { ExampleTextSection } from './components/ExampleTextSection';
import { HomeLinkSection } from './components/HomeLinkSection';
import { KeyboardTouchSection } from './components/KeyboardTouchSection';

import styles from './style.module.css';

export const Keyboard: React.FC = () => {
   return (
      <div className={styles.keyboardViewHeight}>
         <div className={styles.keyboardPage}>
            <HomeLinkSection />
            <ExampleTextSection />
            <KeyboardTouchSection />
         </div>
      </div>
   );
};
