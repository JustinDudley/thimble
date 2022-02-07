import React from 'react';
import { ExampleTextSection } from './components/ExampleTextSection';
import { HomeLinkSection } from './components/HomeLinkSection';
import { KeyboardTouchSection } from './components/KeyboardTouchSection';

import styles from './style.module.css';

export const Keyboard: React.FC<{ appBarAdjustment: string }> = ({
   appBarAdjustment,
}) => {
   return (
      <div id={styles.keyboardViewHeight}>
         <div
            id={styles.keyboardPage}
            // need better solution, remove inline styling:
            style={{ height: appBarAdjustment }}
         >
            <HomeLinkSection />
            <ExampleTextSection />
            <KeyboardTouchSection />
         </div>
      </div>
   );
};
