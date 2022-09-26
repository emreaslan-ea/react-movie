import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function MovieSimilar(props){

    const urlID = window.location.pathname.slice(1);

    const [movieSimilar, setMovieSimilar] = useState({})
    
    const dataSimilar = async () =>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${urlID}/similar?api_key=${process.env.REACT_APP_API_KEY}`);
        const responseData = await response.json();
            
        setMovieSimilar(responseData);
            
    }
    
    useEffect( () =>{
        dataSimilar();
    },[]);


    const RefreshPage = () =>{
        window.location.reload();
        
    }
    // to={`/${movie.id}`}
    return(
        <div className="mt-8">
            {console.log("MovieSimilar rendered")}
            <h3 className='uppercase text-sm tracking-wider border-b border-[#456] text-[#9ab]'>SIMILAR MOVIES</h3>
            <div className='relative flex gap-6 snap-x snap-mandatory overflow-x-auto pb-7 scrollbar mt-6'>
                
                {movieSimilar.results ? movieSimilar.results.map(movie => (
                    <a  key={movie.id} href='#moviePart' className='snap-start scroll-mx-6 shrink-0 overflow-hidden bg-red-400 cursor-pointer rounded-lg relative group'>
                        <Link to={`/${movie.id}`} onClick={()=>RefreshPage} >
                            <div className="rounded-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                                <div>
                                    <div className="pl-1 space-y-3 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-5 transform transition duration-300 ease-in-out">
                                        <div className="font-bold">{movie.name || movie.title}</div>
                                    </div>
                                </div>
                            </div>
                            <img
                                alt=""
                                className="group-hover:opacity-30 shrink-0 object-cover w-24 group-hover:scale-110 transition duration-300 ease-in-out"
                                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                            />
                        </Link>
                    
                    </a>
                )): movieSimilar.results}
                
            </div>






        </div>    
           
        
    )
}

export default MovieSimilar;