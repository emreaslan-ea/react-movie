
import React from 'react';
import {useEffect,useState} from 'react';


export default class MovieReviews extends React.Component {
    state={
        movieReview : {}
    }
  render() {
    return (
      <div>
        {console.log(this.props.movieDetail)}
        <div className='w-5/6 mx-auto lg:w-2/3 flex bg-black p-5 z-50'>
                <div className='lg:w-1/5 w-1/4 max-w-full basis-1/4'>
                    <img className='rounded-lg  object-cover  '
                    alt="" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${this.props.movieDetail.poster_path}`}/>
                </div>
                <div className='basis-3/4 ml-4'>
                    <h1 className='text-white text-3xl font-serif font-light capitalize'>{this.props.movieDetail.title}</h1>
                    <p className='text-gray-400 text-sm'>{this.props.movieDetail.release_date ? this.props.movieDetail.release_date.toString().slice(0,4) : this.props.movieDetail.title}</p>
                    <p className='text-gray-400 text-lg'>Directed by</p>
                </div>
        </div>
      </div>
    )
  }
}

// function MovieReviews(){
    
    

    // const dataReview = async () =>{
    //     const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}`);
    //     const responseData = await response.json();
        
    //     setMovieReview(responseData);
        
    // }

    // useEffect( () =>{
    //     dataReview();
    // },[]);
   

//     return(
//         <div>
            
//             sadsadsd
//         </div>
//     )
// }
