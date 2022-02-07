import React, { useState } from 'react';
import { colors } from '../../../../helpers/jsColors'; //save

import TargetLogo from '../../../../assets/images/target-logo.svg';
import classNames from 'classnames';
import styles from './style.module.css';

// this file, and especially CSS file, assume 3x3=9 miniBoxes in each wholeKey

const MiniBox: React.FC<{
  letter: string;
  keyCounter: number;
  miniBoxId: number;
  keyboardCounter: number;
  gradientRecord: number[];
  setGradientRecord: React.Dispatch<React.SetStateAction<number[]>>;
}> = ({
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
  const [keyBoardCounterSnapshot, setKeyboardCounterSnapshot] =
    useState(0);

  return (
    <div
      id={styles.miniBox}
      onClick={() => {
        setIsClicked(true);
        setKeyboardCounterSnapshot(keyboardCounter);
        setGradientRecord(() => {
          gradientRecord[miniBoxId] = gradientRecord[miniBoxId] + 1;
          return gradientRecord;
        });
        // setMiniCounter(keyCounter); //save
      }}
      // SAVE BELOW:  This sets the colors for my follow-the-leader purple:
      // style={{backgroundColor: isClicked && keyCounter === miniCounter + 1? colors.purpleFeedback : isClicked && keyCounter - (miniCounter + 1) < numMinisToShow? colors.purpleFaded:'inherit'}}
    >
      {isClicked &&
        keyboardCounter - numTargetsToShow <=
          keyBoardCounterSnapshot && (
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

export const WholeKey: React.FC<{
  letter: string;
  keyboardCounter: number;
}> = ({ letter, keyboardCounter }) => {
  const miniBoxIds = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [keyCounter, setKeyCounter] = useState(0);
  const [gradientRecord, setGradientRecord] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const mostPresses = Math.max(...gradientRecord);
  const mostPressedMiniBox = gradientRecord.indexOf(mostPresses);

  let direction = '';
  if (mostPresses !== 0) {
    switch (mostPressedMiniBox) {
      case 0:
        direction = 'left top';
        break;
      case 1:
        direction = 'top';
        break;
      case 2:
        direction = 'right top';
        break;
      case 3:
        direction = 'left';
        break;
      case 4:
        direction = '';
        break; //key has not yet been clicked, OR center mini gets clicked
      case 5:
        direction = 'right';
        break;
      case 6:
        direction = 'left bottom';
        break;
      case 7:
        direction = 'bottom';
        break;
      case 8:
        direction = 'right bottom';
    }
  }

  return (
    <div
      className={classNames(styles.wholeKey, {
        [styles.wholeKeySpacebar]: letter === ' ',
      })}
      onClick={() => {
        setKeyCounter(keyCounter + 1);
      }}
    >
      {miniBoxIds.map((miniBoxId) => (
        <MiniBox
          key={miniBoxId}
          miniBoxId={miniBoxId}
          letter={letter}
          keyCounter={keyCounter}
          keyboardCounter={keyboardCounter}
          gradientRecord={gradientRecord}
          setGradientRecord={setGradientRecord}
        />
      ))}
      <div
        id={styles.shownKey}
        style={{
          background:
            direction === ''
              ? '#E8E8E8'
              : `linear-gradient(to ${direction}, #E8E8E8, 85%, #888)`,
        }}
      >
        <div id={styles.letter}>{letter}</div>
      </div>
    </div>
  );
};
