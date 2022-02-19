// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    background-color: '##FFE81F';
`

const Character = props => {
    return(
        <StyledCharacter>
            {props.char.name}
            <button onClick={() => props.openBio(props.char)}>
                See Bio
                </button>
        </StyledCharacter>
    )
}

export default Character;