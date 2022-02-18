// Write your Character component here
import React from 'react';

const Character = props => {
    return(
        <div>
            {props.bio.name}
            <button onClick={() => props.openBio(props.bio.name)}>
                See Bio
                </button>
        </div>
    )
}

export default Character;