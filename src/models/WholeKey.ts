export interface MiniBoxProps {
   letter: string;
   keyCounter: number;
   miniBoxId: number;
   keyboardCounter: number;
   gradientRecord: number[];
   setGradientRecord: React.Dispatch<React.SetStateAction<number[]>>;
}

export interface WholeKeyProps {
   letter: string;
   keyboardCounter: number;
}
