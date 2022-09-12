import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';





function MoviePart(){
    const { id } = useParams();
    const [movieDetail, setMovieDetail] = useState({});
    
    const data = async () =>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
        const responseData = await response.json();
        
        setMovieDetail(responseData);
        
    }
    useEffect( () =>{
        data();
    });
   
    

    //src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieDetail.backdrop_path}`}
    return(
        <div className='relative z-30'>
            
            <img className='-z-20 absolute ' src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieDetail.backdrop_path}`}alt=""/>
            <img className='absolute -z-10 w-full  aspect-[12/5]' alt="" src="https://imgs.search.brave.com/pVL4eQl5R1V8wtwjMhxzt9Zmx3xANfKzBIywIjSqhrI/rs:fit:1200:1144:1/g:ce/aHR0cHM6Ly93d3cu/ZGFuY2V3aXRobWUu/dXMvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDMvYmxhY2st/ZmFkZS1mdWxsLnBu/Zw"></img>

            {/* <div className='bg-gradient-to-t from-black z-20 via-none flex justify-center lg:w-4/5 mx-auto w-full'>
                <img className='-z-10 relative' src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieDetail.backdrop_path}`}alt=""/>
            </div> */}
            
            
            <div className='z-30 w-5/6 mx-auto lg:w-2/3 flex  p-5  pt-80 '>
                <div className='lg:w-1/5 w-1/4 max-w-full basis-1/4'>
                    <img className='rounded-lg  object-cover  '
                    alt="" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movieDetail.poster_path}`}/>
                </div>
                <div className='basis-3/4 ml-4'>
                    <h1 className='text-white text-3xl font-serif font-light capitalize'>{movieDetail.title}</h1>
                    <p className='text-gray-400 text-sm'>{movieDetail.release_date ? movieDetail.release_date.toString().slice(0,4) : movieDetail.title}</p>
                    <p className='text-gray-400 text-lg'>Directed by</p>
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