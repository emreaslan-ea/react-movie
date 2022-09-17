import React from "react";
import { useEffect, useState } from 'react';

function MovieCast(){
    
    const urlID = window.location.pathname.slice(1);

    const [movieCast, setMovieCasts] = useState({})
    
    const dataCast = async () =>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${urlID}/credits?api_key=${process.env.REACT_APP_API_KEY}`);
        const responseData = await response.json();
            
        setMovieCasts(responseData);
            
    }
    
    useEffect( () =>{
        dataCast();
    },[]);

      
    return(
        <div className="mt-16 mb-12">
            <h3 className='uppercase text-sm tracking-wider border-b border-[#456] text-[#9ab]'>CAST</h3>

            <div className=' w-[45rem] gap-x-12 flex flex-nowrap overflow-x-auto pb-2 mt-6 scrollbar'>
                
                {movieCast.cast ? movieCast.cast.map(cast => (
                    <div key={cast.cast_id} className='w-24 flex-col items-center justify-center'>

                        <img
                            alt=""
                            className="rounded-lg object-cover w-16 h-24 mx-auto"
                            src={`https://www.themoviedb.org/t/p/w58_and_h87_face/${cast.profile_path}`}
                        />

                        <div className="font-bold text-center text-[#abc] ">{cast.character}</div>

                        <div className="text-xs text-center text-[#678]">{cast.name}</div>




                    </div>
                )): movieCast.cast}
            </div>
        </div>
    )
}

export default MovieCast;