import React, { useState } from 'react';
import { KeyboardLogicWrapSection } from '../KeyboardLogicWrapSection';

export const KLWSWrapper: React.FC = () => {
   const [numResets, setNumResets] = useState(0);

   return (
      <KeyboardLogicWrapSection
         // when key changes, component is discarded and re-created, which resets all of its state
         key={numResets}
         numResets={numResets}
         setNumResets={setNumResets}
      />
   );
};
