/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default class FilmList extends React.Component {

  render() {
    return (
      
      <div className=" lg:w-4/5 w-full mx-auto">
        {console.log("filmlist rendered")}
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


      </div>
    )
  }
}
