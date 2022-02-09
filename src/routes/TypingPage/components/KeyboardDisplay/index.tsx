import React from 'react';
import { WholeKey } from '../WholeKey';

import styles from './style.module.css';

export const KeyboardDisplay: React.FC<{
   bullseyeCounter: number;
   setBullseyeCounter: React.Dispatch<React.SetStateAction<number>>;
   keyboardCounter: number;
   setKeyboardCounter: React.Dispatch<React.SetStateAction<number>>;
}> = ({
   bullseyeCounter,
   setBullseyeCounter,
   keyboardCounter,
   setKeyboardCounter,
}) => {
   const lettersTop = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
   const lettersMiddle = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
   const lettersBottom = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
   const spaceRow = [',', ' ', '.'];

   return (
      <>
         <div
            className={styles.keyboardDisplay}
            onClick={() => setKeyboardCounter(keyboardCounter + 1)}
         >
            <div className={styles.keyboardRow}>
               {lettersTop.map((letter) => (
                  <WholeKey
                     key={letter}
                     letter={letter}
                     keyboardCounter={keyboardCounter}
                     bullseyeCounter={bullseyeCounter}
                     setBullseyeCounter={setBullseyeCounter}
                  />
               ))}
            </div>
            <div className={styles.keyboardRow}>
               {lettersMiddle.map((letter) => (
                  <WholeKey
                     key={letter}
                     letter={letter}
                     keyboardCounter={keyboardCounter}
                     bullseyeCounter={bullseyeCounter}
                     setBullseyeCounter={setBullseyeCounter}
                  />
               ))}
            </div>
            <div className={styles.keyboardRow}>
               {lettersBottom.map((letter) => (
                  <WholeKey
                     key={letter}
                     letter={letter}
                     keyboardCounter={keyboardCounter}
                     bullseyeCounter={bullseyeCounter}
                     setBullseyeCounter={setBullseyeCounter}
                  />
               ))}
            </div>
            <div className={styles.keyboardRow}>
               {spaceRow.map((letter) => (
                  <WholeKey
                     key={letter}
                     letter={letter}
                     keyboardCounter={keyboardCounter}
                     bullseyeCounter={bullseyeCounter}
                     setBullseyeCounter={setBullseyeCounter}
                  />
               ))}
            </div>
         </div>
      </>
   );
};
