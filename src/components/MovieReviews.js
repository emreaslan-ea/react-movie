
import React from 'react';



// export default class MovieReviews extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state ={
//         movieReview : {
//           success: false
//         }
//       }
//     }

//     componentDidMount(){
//       fetch(`https://api.themoviedb.org/3/movie/${this.props.movieDetail.id}/reviews?api_key=${process.env.REACT_APP_API_KEY}`)
//       .then(response => response.json())
//       .then(responseData => this.setState({movieReview: responseData}))


//     }

//     // componentDidUpdate(){
//     //   this.dataReview()
//     // }


//   render() {
//     const { movieReview } = this.state;



//     return (
//       <div>
        
        // <div className='mt-8'>
        //   <h3 className='uppercase text-sm tracking-wider border-b border-[#456] text-[#9ab]'>Popular Reviews</h3>
        //   {console.log(movieReview)}
        //   {/* {this.state.movieReview.results.map((review,i) =>(

        //     <div key={i}>
        //       <div>
        //         <img className='w-6 h-6' alt='' src={`${review.author_details.avatar_path}`}/>
        //       </div>
        //       <div>
        //         yorumlar{console.log(this.props.movieDetail.title)}
        //       </div>
        //      </div>



//         ))} */}
 



//         </div>
//       </div>
//     )
//   }
// }

import { useEffect, useState } from 'react';

function MovieReviews(){
    
  const urlID = window.location.pathname.slice(1);
  let avatarURL ='';
  let reviewerStars=0;
  const [movieReviews, setMovieReviews] = useState({})

  const dataReview = async () =>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${urlID}/reviews?api_key=${process.env.REACT_APP_API_KEY}`);
    const responseData = await response.json();
        
    setMovieReviews(responseData);
        
  }

  useEffect( () =>{
    dataReview();
  },[]);
   
    
    return(
      <div>
        <div className='mt-8'>
          <h3 className='uppercase text-sm tracking-wider border-b border-[#456] text-[#9ab]'>Popular Reviews</h3>

          {console.log(movieReviews.results)}

          {movieReviews.results ? movieReviews.results.map((review, i) => {

            //review star rating
            reviewerStars = review.author_details.rating;

            const getReviewersStars = reviewerStars => {
              let allReviewerStars = [];
              for (let i = 0; i <= reviewerStars; i++) {
                const item = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 fill-green-500"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" /></svg>;
                allReviewerStars.push(<li key={item.id}>{item}</li>);
              }
              return allReviewerStars;
            };

            //avatar path
            review.author_details.avatar_path.includes('https') ?
              avatarURL = review.author_details.avatar_path.slice(1) :
              avatarURL = `https://www.gravatar.com/avatar/${review.author_details.avatar_path}`

            return (

              <div key={review.id} className='flex mt-6'>

                <div className='ml-4'>
                  <img className='rounded-full w-11 h-11' alt='' src={`${avatarURL}`} />
                </div>


                <div className='ml-5'>

                  <div className='flex items-center'>
                    <p className='text-[#678] text-xs'>Review by <span className='text-[#abc] text-bold'>{review.author}</span></p>
                    <ul className='flex ml-2'>{getReviewersStars(reviewerStars)}</ul>
                  </div>

                  <div className='mt-2 w-full'>
                    <p className='text-[#678] overflow-hidden text-ellipsis w-[40rem] max-h-24'>{review.content}</p>
                  </div>
                </div>

              </div>

            )
          }) : movieReviews.results}

        </div>
      </div>

    )
}

export default MovieReviews;