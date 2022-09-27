
import {React, useEffect, useState } from 'react';

function MovieReviews(){
    
  const urlID = window.location.pathname.slice(1);
  let avatarURL ='';
  let reviewerStars=0;
  const [movieReviews, setMovieReviews] = useState({})

  // const dataReview = async () =>{
  //   const response = await fetch(`https://api.themoviedb.org/3/movie/${urlID}/reviews?api_key=${process.env.REACT_APP_API_KEY}`);
  //   const responseData = await response.json();
        
  //   setMovieReviews(responseData);
        
  // }
  console.log(movieReviews)
  useEffect( () =>{
    const dataReview = async () =>{
      const response = await fetch(`https://api.themoviedb.org/3/movie/${urlID}/reviews?api_key=${process.env.REACT_APP_API_KEY}`);
      const responseData = await response.json();
          
      setMovieReviews(responseData);
          
    }
    dataReview();
  },[urlID]);
  
  if(movieReviews.total_results === 0){
    return <></>
  }
  else{
    return(
      
        <div className='mt-8'>
          <h3 className='uppercase text-sm tracking-wider border-b border-[#456] text-[#9ab]'>Popular Reviews</h3>

          {movieReviews.results ? movieReviews.results.map((review, id) => {

            //review star rating
            reviewerStars = review.author_details.rating;

            const getReviewersStars = reviewerStars => {
              let allReviewerStars = [];
              for (let j = 0; j <= reviewerStars; j++) {
                const item = <svg key={j} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 fill-green-500"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" /></svg>;
                allReviewerStars.push(<li key={item.id}>{item}</li>);
              }
              return allReviewerStars;
            };

            //avatar path
            if(!review.author_details.avatar_path === null){
              review.author_details.avatar_path.includes('https') ?
              avatarURL = review.author_details.avatar_path.slice(1) :
              avatarURL = `https://www.gravatar.com/avatar/${review.author_details.avatar_path}`
            }else{
              avatarURL ='https://cdn-icons-png.flaticon.com/128/168/168734.png';
            }

            return (

              <a  href={review.url} key={id} className='flex mt-2 hover:ring p-4 ring-sky-800 transition duration-500' title='read more...'>

                <div>
                  <img className='rounded-full aspect-square max-w-[36px]' alt='' src={`${avatarURL}`} />
                </div>


                <div className='pl-4 overflow-hidden'>

                  <div className='flex items-center'>
                    <p className='text-[#678] text-xs'>Review by <span className='text-[#abc] text-bold'>{review.author}</span></p>
                    <ul className='flex ml-2'>{getReviewersStars(reviewerStars)}</ul>
                  </div>

                  <div className='mt-2'>
                    <p className='text-[#678] text-sm md:text-base text-ellipsis max-h-24 text-left'>{review.content}</p>
                  </div>
                </div>

              </a>

            )
          }) : movieReviews.results}

        </div>
    )
  }
    
}

export default MovieReviews;