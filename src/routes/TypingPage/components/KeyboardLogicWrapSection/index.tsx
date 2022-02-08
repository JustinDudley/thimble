import React from 'react';
import { KeyboardDisplay } from '../KeyboardDisplay';
import { UserConsole } from '../UserConsole';

import styles from './style.module.css';

export const KeyboardLogicWrapSection = () => {
   return (
      <div className={styles.keyboardLogicWrapSection}>
         <UserConsole />
         <KeyboardDisplay />
      </div>
   );
};
