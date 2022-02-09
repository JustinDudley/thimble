import React, { useState } from 'react';
import { KeyboardAndConsoleSection } from '../KeyboardAndConsoleSection';

export const KeyboardAndConsoleLogicWrap: React.FC = () => {
   const [numResets, setNumResets] = useState(0);

   return (
      <KeyboardAndConsoleSection
         // when key changes, React discards and re-creates this component, which resets all of its internal state. This includes keyboardCounter, and that's why KeyboardCounter must be set in a component WITHIN this component here)
         key={numResets}
         numResets={numResets}
         setNumResets={setNumResets}
      />
   );
};
