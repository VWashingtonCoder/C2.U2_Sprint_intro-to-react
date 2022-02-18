import React from 'react'

const Bio = props => {
    //props: bio & closeBio
    let objBio = props.bio;
    console.log(objBio);
    
    return(
        <div className='bio-container'>
            {
                objBio &&
                <>
                    <h2>Bio of {objBio.name}</h2>
                    <p>Name: {objBio.name}</p>
                    <p>Birth Year: {objBio.birth_year}</p>
                    <p>Gender: {objBio.gender}</p>
                    <p>Height: {objBio.height}</p>
                    <p>Mass: {objBio.mass}</p>
                    <p>Hair Color: {objBio.hair_color}</p>
                    <p>Skin Color: {objBio.skin_color}</p>
                    <p>Eye Color: {objBio.eye_color}</p>          
                    <button onClick={() => props.closeBio()}>Clear</button>
                </>
            }
        </div>
    )
        
}
//     {/* <ul> Films:
        //         {objBio.films.map(film => {
        //                return <li key={film}>{film}</li>
        //                })} 
        //     </ul> */}



export default Bio