export interface MiniBoxProps {
   bullseyeCounter: number;
   setBullseyeCounter: React.Dispatch<React.SetStateAction<number>>;
   letter: string;
   keyCounter: number;
   miniBoxId: number;
   keyboardCounter: number;
   gradientRecord: number[];
   setGradientRecord: React.Dispatch<React.SetStateAction<number[]>>;
}

export interface WholeKeyProps {
   bullseyeCounter: number;
   setBullseyeCounter: React.Dispatch<React.SetStateAction<number>>;
   letter: string;
   keyboardCounter: number;
   typedSentence: string;
   setTypedSentence: React.Dispatch<React.SetStateAction<string>>;
}
