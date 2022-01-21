import React, { useState } from 'react';

import './style.css'

const Mini: React.FC = () => {

    const [isClicked, setIsClicked] = useState(false);

    return (
        <div 
            id="mini" 
            onClick={() => {console.log('mini clicked'); setIsClicked(true);}}
            style={{backgroundColor: isClicked? 'red': 'inherit'}}
        />
    )
}

export const LetterBox: React.FC = () => {
    return (
        <div id="letterBox">
            <div 
                style={{
                    position: 'absolute', 
                    top: '10%', 
                    left: '10%', 
                    width: '80%', 
                    height: '80%', 
                    backgroundColor: 'lightgray', 
                    zIndex: '-1'
                }}
            />

             <div 
                style={{
                    position: 'absolute', 
                    top: '5%', 
                    left: '40%', 
                    zIndex: '-1',
                    fontSize: '2.5rem',
                }}
            >
                k
            </div> 
            {/* <img style={{position: 'absolute', top: '20%', left: '20%', width: '60%', height: '60%' , zIndex: '-2'}} src={require("../../../../assets/images/letter_D.png")} alt='letter' width='100%' height='100%' /> */}
            
  
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini />
            <Mini /> 
        </div>
    )
}

