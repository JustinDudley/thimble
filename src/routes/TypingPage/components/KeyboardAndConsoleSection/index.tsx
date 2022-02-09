import React, { useState } from 'react';
import { KeyboardDisplay } from '../KeyboardDisplay';
import { UserConsole } from '../UserConsole';

import styles from './style.module.css';

export const KeyboardAndConsoleSection: React.FC<{
   numResets: number;
   setNumResets: React.Dispatch<React.SetStateAction<number>>;
}> = ({ numResets, setNumResets }) => {
   const [keyboardCounter, setKeyboardCounter] = useState(0);
   const [bullseyeCounter, setBullseyeCounter] = useState(0);

   return (
      <div className={styles.keyboardAndConsoleSection}>
         <UserConsole
            bullseyeCounter={bullseyeCounter}
            keyboardCounter={keyboardCounter}
            numResets={numResets}
            setNumResets={setNumResets}
         />
         <KeyboardDisplay
            bullseyeCounter={bullseyeCounter}
            setBullseyeCounter={setBullseyeCounter}
            keyboardCounter={keyboardCounter}
            setKeyboardCounter={setKeyboardCounter}
         />
      </div>
   );
};
