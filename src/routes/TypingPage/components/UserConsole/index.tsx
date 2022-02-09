import React from 'react';

import styles from './style.module.css';

const Score: React.FC<{
   keyboardCounter: number;
}> = ({ keyboardCounter }) => {
   return <div>{`score x/${keyboardCounter}`}</div>;
};

const ResetButton: React.FC<{
   numResets: number;
   setNumResets: React.Dispatch<React.SetStateAction<number>>;
}> = ({ numResets, setNumResets }) => {
   return <div onClick={() => setNumResets(numResets + 1)}>reset</div>;
};

const UserSentence: React.FC = () => {
   return (
      <div className={styles.userSentence}>
         dynamically changing sentence goes here
      </div>
   );
};

const Panel: React.FC<{
   keyboardCounter: number;
   numResets: number;
   setNumResets: React.Dispatch<React.SetStateAction<number>>;
}> = ({ keyboardCounter, numResets, setNumResets }) => {
   return (
      <div className={styles.panel}>
         <Score keyboardCounter={keyboardCounter} />
         <ResetButton numResets={numResets} setNumResets={setNumResets} />
      </div>
   );
};

export const UserConsole: React.FC<{
   keyboardCounter: number;
   numResets: number;
   setNumResets: React.Dispatch<React.SetStateAction<number>>;
}> = ({ keyboardCounter, numResets, setNumResets }) => {
   return (
      <div className={styles.userConsole}>
         <UserSentence />
         <Panel
            keyboardCounter={keyboardCounter}
            numResets={numResets}
            setNumResets={setNumResets}
         />
      </div>
   );
};
