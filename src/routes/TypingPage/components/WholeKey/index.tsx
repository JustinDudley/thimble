import React, { useState } from 'react';
import { colors } from '../../../../helpers/jsColors'; //save

import TargetLogo from '../../../../assets/images/target-logo.svg';
import classNames from 'classnames';
import styles from './style.module.css';
import { MiniBoxProps, WholeKeyProps } from '../../../../models/WholeKey';

// this file, and especially CSS file, assume 3x3=9 miniBoxes in each wholeKey

const MiniBox: React.FC<MiniBoxProps> = ({
   bullseyeCounter,
   setBullseyeCounter,
   letter,
   keyCounter,
   keyboardCounter,
   miniBoxId,
   gradientRecord,
   setGradientRecord,
}) => {
   const numMinisToShow = 3; //save
   const [miniCounter, setMiniCounter] = useState(0); //save

   const numTargetsToShow = 2;
   const [isClicked, setIsClicked] = useState(false);
   const [keyBoardCounterSnapshot, setKeyboardCounterSnapshot] = useState(0);

   return (
      <div
         className={styles.miniBox}
         onClick={() => {
            setIsClicked(true);
            setKeyboardCounterSnapshot(keyboardCounter);
            setGradientRecord(() => {
               gradientRecord[miniBoxId] = gradientRecord[miniBoxId] + 1;
               return gradientRecord;
            });
            miniBoxId === 4 && setBullseyeCounter(bullseyeCounter + 1);
            // setMiniCounter(keyCounter); //save
         }}
         // SAVE BELOW:  This sets the colors for my follow-the-leader purple:
         // style={{backgroundColor: isClicked && keyCounter === miniCounter + 1? colors.purpleFeedback : isClicked && keyCounter - (miniCounter + 1) < numMinisToShow? colors.purpleFaded:'inherit'}}
      >
         {isClicked &&
            keyboardCounter - numTargetsToShow <= keyBoardCounterSnapshot && (
               <img
                  src={TargetLogo}
                  alt="target logo"
                  className={classNames(
                     styles.targetLogo,
                     { [styles.targetSpacebar]: letter === ' ' },
                     {
                        [styles.targetTrace]:
                           keyboardCounter - 1 !== keyBoardCounterSnapshot,
                     }, // [brackets] are necessary because this is an object key
                  )}
               />
            )}
      </div>
   );
};

export const WholeKey: React.FC<WholeKeyProps> = ({
   bullseyeCounter,
   setBullseyeCounter,
   letter,
   keyboardCounter,
   typedSentence,
   setTypedSentence,
}) => {
   const miniBoxIds = [0, 1, 2, 3, 4, 5, 6, 7, 8];
   const [keyCounter, setKeyCounter] = useState(0);
   const [gradientRecord, setGradientRecord] = useState([
      0, 0, 0, 0, 0, 0, 0, 0, 0,
   ]);

   const mostPresses = Math.max(...gradientRecord);
   const mostPressedMiniBox = gradientRecord.indexOf(mostPresses);
   const directions = [
      'toLeftTop',
      'toTop',
      'toRightTop',
      'toLeft',
      'noGradient',
      'toRight',
      'toLeftBottom',
      'toBottom',
      'toRightBottom',
   ];

   return (
      <div
         className={classNames(styles.wholeKey, {
            [styles.wholeKeySpacebar]: letter === ' ',
         })}
         onClick={() => {
            setKeyCounter(keyCounter + 1);
            setTypedSentence(typedSentence + letter);
         }}
      >
         {miniBoxIds.map((miniBoxId) => (
            <MiniBox
               key={miniBoxId}
               bullseyeCounter={bullseyeCounter}
               setBullseyeCounter={setBullseyeCounter}
               miniBoxId={miniBoxId}
               letter={letter}
               keyCounter={keyCounter}
               keyboardCounter={keyboardCounter}
               gradientRecord={gradientRecord}
               setGradientRecord={setGradientRecord}
            />
         ))}
         <div
            className={classNames(
               styles.shownKey,
               styles[directions[mostPressedMiniBox]],
               { [styles.noGradient]: mostPresses === 0 },
            )}
         >
            <div className={styles.letter}>{letter}</div>
         </div>
      </div>
   );
};
