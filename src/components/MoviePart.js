import { useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';


function MoviePart(){
    const { id } = useParams();
    
        const data = async () =>{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
            const responseData = await response.json();
    
            return responseData
        }


   


    
    return(
        <>
            {}
            {}
        </>
    )


}

export default MoviePart;