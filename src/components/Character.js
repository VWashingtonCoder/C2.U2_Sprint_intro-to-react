// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    background-color: #FFE81F;  
    margin: 1rem 2rem;
    padding: 2px;
    padding-bottom: 7px;
    border: 2px solid black;
    display: flex;
    flex-flow: column;
    align-items: center;
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