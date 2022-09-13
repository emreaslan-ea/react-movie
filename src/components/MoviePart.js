import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MovieReviews from './MovieReviews';





function MoviePart(){
    const { id } = useParams();
    const [movieDetail, setMovieDetail] = useState({});
    
    
    const dataDetail = async () =>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
        const responseData = await response.json();
        
        setMovieDetail(responseData);
        
    }





    useEffect( () =>{
        dataDetail();
        
    },[]);
   
    
    // {const pop = movieDetail.popularity.toPrecision(2);
    // console.log(pop);
    // }
    //src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieDetail.backdrop_path}`}
    return(
        <div className='relative z-30'>
            
            <img className='-z-20 absolute ' src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieDetail.backdrop_path}`}alt=""/>
            <img className='absolute -z-10 w-full  aspect-[12/5]' alt="" src="https://imgs.search.brave.com/pVL4eQl5R1V8wtwjMhxzt9Zmx3xANfKzBIywIjSqhrI/rs:fit:1200:1144:1/g:ce/aHR0cHM6Ly93d3cu/ZGFuY2V3aXRobWUu/dXMvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDMvYmxhY2st/ZmFkZS1mdWxsLnBu/Zw"></img>

            {/* <div className='bg-gradient-to-t from-black z-20 via-none flex justify-center lg:w-4/5 mx-auto w-full'>
                <img className='-z-10 relative' src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieDetail.backdrop_path}`}alt=""/>
            </div> */}
         

            <div className='z-30 w-5/6 mx-auto lg:w-2/3 flex  p-5  pt-96 '>
                <div className='lg:w-1/5 w-1/4 max-w-full basis-1/4'>
                    <img className='rounded-lg  object-cover  '
                    alt="" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movieDetail.poster_path}`}/>
                    
                    <div className='flex items-center justify-evenly mr-4 mt-2'>
                        <div className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 fill-red-700">
                                <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                            </svg>
                            <p className='text-xs text-white'>{movieDetail.vote_count}</p>
                        </div>
                        <div className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 fill-orange-600">
                                <path fillRule="evenodd" d="M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z" clipRule="evenodd" />
                            </svg>
                            <p className='text-xs text-white'>{movieDetail.popularity ? movieDetail.popularity.toFixed() : movieDetail.title}</p>
                        </div>
                        <div className='flex items-center'>
                            <svg className='fill-yellow-500 w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M89.5 323.6H53.93V186.2H89.5V323.6zM156.1 250.5L165.2 186.2H211.5V323.6H180.5V230.9L167.1 323.6H145.8L132.8 232.9L132.7 323.6H101.5V186.2H147.6C148.1 194.5 150.4 204.3 151.9 215.6L156.1 250.5zM223.7 323.6V186.2H250.3C267.3 186.2 277.3 187.1 283.3 188.6C289.4 190.3 294 192.8 297.2 196.5C300.3 199.8 302.3 203.1 303 208.5C303.9 212.9 304.4 221.6 304.4 234.7V282.9C304.4 295.2 303.7 303.4 302.5 307.6C301.4 311.7 299.4 315 296.5 317.3C293.7 319.7 290.1 321.4 285.8 322.3C281.6 323.1 275.2 323.6 266.7 323.6H223.7zM259.2 209.7V299.1C264.3 299.1 267.5 298.1 268.6 296.8C269.7 294.8 270.4 289.2 270.4 280.1V226.8C270.4 220.6 270.3 216.6 269.7 214.8C269.4 213 268.5 211.8 267.1 210.1C265.7 210.1 263 209.7 259.2 209.7V209.7zM316.5 323.6V186.2H350.6V230.1C353.5 227.7 356.7 225.2 360.1 223.5C363.7 222 368.9 221.1 372.9 221.1C377.7 221.1 381.8 221.9 385.2 223.3C388.6 224.8 391.2 226.8 393.2 229.5C394.9 232.1 395.9 234.8 396.3 237.3C396.7 239.9 396.1 245.3 396.1 253.5V292.1C396.1 300.3 396.3 306.4 395.3 310.5C394.2 314.5 391.5 318.1 387.5 320.1C383.4 324 378.6 325.4 372.9 325.4C368.9 325.4 363.7 324.5 360.2 322.9C356.7 321.1 353.5 318.4 350.6 314.9L348.5 323.6L316.5 323.6zM361.6 302.9C362.3 301.1 362.6 296.9 362.6 290.4V255C362.6 249.4 362.3 245.5 361.5 243.8C360.8 241.9 357.8 241.1 355.7 241.1C353.7 241.1 352.3 241.9 351.6 243.4C351 244.9 350.6 248.8 350.6 255V291.4C350.6 297.5 351 301.4 351.8 303C352.4 304.7 353.9 305.5 355.9 305.5C358.1 305.5 360.1 304.7 361.6 302.9L361.6 302.9zM418.4 32.04C434.1 33.27 447.1 47.28 447.1 63.92V448.1C447.1 464.5 435.2 478.5 418.9 479.1C418.6 479.1 418.4 480 418.1 480H29.88C29.6 480 29.32 479.1 29.04 479.9C13.31 478.5 1.093 466.1 0 449.7L.0186 61.78C1.081 45.88 13.82 33.09 30.26 31.1H417.7C417.9 31.1 418.2 32.01 418.4 32.04L418.4 32.04zM30.27 41.26C19 42.01 10.02 51.01 9.257 62.4V449.7C9.63 455.1 11.91 460.2 15.7 464C19.48 467.9 24.51 470.3 29.89 470.7H418.1C429.6 469.7 438.7 459.1 438.7 448.1V63.91C438.7 58.17 436.6 52.65 432.7 48.45C428.8 44.24 423.4 41.67 417.7 41.26L30.27 41.26z"/>
                            </svg>
                            <p className='text-xs text-white'>{movieDetail.vote_average ? movieDetail.vote_average.toString().slice(0,3) : movieDetail.title}</p>
                        </div>
                    </div>


                </div>
                <div className='basis-3/4 ml-4'>
                    <h1 className='text-white text-3xl font-serif font-light capitalize'>{movieDetail.title} <span className='text-gray-300 text-sm'>{movieDetail.release_date ? movieDetail.release_date.toString().slice(0,4) : movieDetail.title}</span></h1>
                    
                    <h3 className='text-gray-300  uppercase font-bold mt-12'>{movieDetail.tagline}</h3>
                    <p className='text-gray-400 indent-8 mt-4'>{movieDetail.overview}</p>
                    <div className='mt-5 flex gap-x-4'>
                        {movieDetail.genres ? movieDetail.genres.map(genre =>(
                        
                            <h1 key={genre.id} className='py-2 px-4 text-white bg-sky-800 text-sm rounded-full'>{genre.name}</h1>
                            
                        )) : movieDetail.title}
                    </div>

                    {/*MOVİE Revievs*/}
                    <MovieReviews movieDetail={movieDetail}/>
                    
                </div>
            </div>
           
             

            
        </div>
    )


}

export default MoviePart;


          /* <div className='w-5/6 mx-auto -mt-32 lg:w-2/3 flex bg-black p-5 z-50'>
                <div className='lg:w-1/5 w-1/4 max-w-full basis-1/4'>
                    <img className='rounded-lg  object-cover  '
                    alt="" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movieDetail.poster_path}`}/>
                </div>
                <div className='basis-3/4 ml-4'>
                    <h1 className='text-white text-3xl font-serif font-light capitalize'>{movieDetail.title}</h1>
                    <p className='text-gray-400 text-sm'>{movieDetail.release_date ? movieDetail.release_date.toString().slice(0,4) : movieDetail.title}</p>
                    <p className='text-gray-400 text-lg'>Directed by</p>
                </div>
            </div>*/