import React from 'react';

import styles from './style.module.css';

export const SampleSection: React.FC = () => {
   return (
      <div className={styles.sampleSection}>
         Not only is it the first time since 1993 that both conference No. 1
         seeds have advanced to the Super Bowl, but this year also dispels the
         notion that you need a dominant defense to win a championship.
      </div>
   );
};
