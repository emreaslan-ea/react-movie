import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UpcomingMovies = () =>{

    const [upcomingMovies, setUpcomingMovies] = useState("");

    
    
    const fetchUpcomingMovies = async () =>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`);
        const responseData = await response.json();
        
        setUpcomingMovies(responseData);
    }

    useEffect( () =>{
        fetchUpcomingMovies();
    },[])

    console.log(upcomingMovies);
   
    return (
        
            <div className='mt-16 lg:w-4/5 w-full mx-auto cursor-pointer text-[#abc]'>
                {console.log("upcomingmovies rendered")}
                <div className='flex items-center'>
                    <h1 className='text-2xl mr-8 mb-2 font-normal'>Upcoming Movies</h1>
                </div>

                <div className='relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-7 scrollbar'>
                
                    {upcomingMovies.results ? upcomingMovies.results.map(movie => (
                        <Link to={`/${movie.id}`} key={movie.id} className='snap-start scroll-mx-6 shrink-0 overflow-hidden bg-red-400 cursor-pointer rounded-lg relative group'>
                            
                                <div className="rounded-lg z-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                                    <div>
                                        <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                            <div className="font-bold">{movie.name || movie.title}</div>

                                            <div className="opacity-70 text-xs">
                                                {movie.overview}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    alt=""
                                    className="group-hover:opacity-30 shrink-0 object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out"
                                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                                />
                            
                        
                        </Link>
                    )) : upcomingMovies}
                </div>
            </div>
        
  
    )
}

export default UpcomingMovies;