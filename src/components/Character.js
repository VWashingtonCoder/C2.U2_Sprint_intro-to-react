// Write your Character component here
import React from 'react';

const Character = props => {
    return(
        <div>
            {props.char.name}
            <button onClick={() => props.openBio(props.char)}>
                See Bio
                </button>
        </div>
    )
}

export default Character;