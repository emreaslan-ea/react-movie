/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default class FilmList extends React.Component {

  render() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

            {this.props.movies.map((movie) => (

              <div href="#" className="group drop-shadow-md" key={movie.id}>
                <div className="px-0.5 w-full overflow-hidden">
                  <img src ={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="Movie poster" className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-t-lg" />
                </div>
                
                <div className='p-3 pt-1 -mt-1 border-solid border-slate-200 border-2 rounded-b-lg'>
                  <h3 className="mt-2 text-lg text-gray-900">{movie.name || movie.title}</h3>
                  <p className="mt-1 text-xs text-gray-600">{movie.overview}</p>
                  <div className='flex justify-between'>
                    <button onClick={() => this.props.deleteMovieProp(movie)} className='p-0 px-3 mt-3 text-red-500 border-red-300 border-2 rounded-lg hover:bg-red-500 hover:text-white'>Delete</button>
                    <span className='p-1 px-3 mt-3 bg-sky-500 text-lg text-white rounded-lg'>{movie.vote_average.toString().slice(0,3)}</span>
                  </div>
                </div>
              </div>

            ))}

          </div>
        </div>


        {/* <div className='wrapper'>

          <div className='group ease-out duration-300 relative hover:before:opacity-100 before:absolute before:opacity-0 before:top-0 before:left-0 before:transition-opacity before:z-20 before:bg-gray-300'>
            <img className='absolute w-64 h-64' src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt='movie' />
            <div className='info max-w-fit group-hover:opacity-100 group-hover:translate-y-0 translate-y-64 duration-500 z-30 '>
              <h1>Mountain</h1>
              <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
              <button>Read More</button>
            </div>
          </div>

        </div>
        <div className='h-96 bg-slate-600'></div> */}

        



      </div>
    )
  }
}
