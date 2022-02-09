import React, { useState } from 'react';
import { KeyboardDisplay } from '../KeyboardDisplay';
import { UserConsole } from '../UserConsole';

import styles from './style.module.css';

export const KeyboardLogicWrapSection: React.FC<{
   numResets: number;
   setNumResets: React.Dispatch<React.SetStateAction<number>>;
}> = ({ numResets, setNumResets }) => {
   const [keyboardCounter, setKeyboardCounter] = useState(0);

   return (
      <div className={styles.keyboardLogicWrapSection}>
         <UserConsole
            keyboardCounter={keyboardCounter}
            numResets={numResets}
            setNumResets={setNumResets}
         />
         <KeyboardDisplay
            numResets={numResets}
            keyboardCounter={keyboardCounter}
            setKeyboardCounter={setKeyboardCounter}
         />
      </div>
   );
};
