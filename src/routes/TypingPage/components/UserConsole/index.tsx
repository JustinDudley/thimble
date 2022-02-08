import React from 'react';

import styles from './style.module.css';

const UserSentence: React.FC = () => {
   return (
      <div className={styles.userSentence}>
         dynamically changing sentence goes here
      </div>
   );
};

const Panel: React.FC = () => {
   return (
      <div className={styles.panel}>
         <Score />
         <ResetButton />
      </div>
   );
};

const Score: React.FC = () => {
   return <div>score</div>;
};

const ResetButton: React.FC = () => {
   return <div>reset</div>;
};

export const UserConsole: React.FC = () => {
   return (
      <div className={styles.userConsole}>
         <UserSentence />
         <Panel />
      </div>
   );
};
