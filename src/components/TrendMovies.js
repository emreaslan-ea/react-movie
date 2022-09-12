import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class TrendMovies extends Component {
    state ={
        trendperiod : false
    }

  render() {    
    // to={`/:${id}`}
    return (
        
            <div className='mt-5 lg:w-4/5 w-full mx-auto cursor-pointer'>
                <div className='flex items-center'>
                    <h1 className='text-2xl mr-8 mb-2 font-normal'>Trending Movies</h1>

                    <label htmlFor="default-toggle" className="mb-0.5 inline-flex relative items-center cursor-pointer">

                        <input onChange={(e) => {
                            this.setState({ trendperiod: e.target.checked })
                            this.props.trendScale(this.state.trendperiod);
                        }}
                            type="checkbox" id="default-toggle" className="sr-only peer" />

                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>

                    <p className='text-sm mb-1 ml-1 font-semibold'>Day/Week</p>
                </div>

                <div className='relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-7'>
                
                    {this.props.trendMovies.map(movie => (
                        <Link to={`/${movie.id}`} key={movie.id} className='snap-start scroll-mx-6 shrink-0 overflow-hidden bg-red-400 cursor-pointer rounded-lg relative group'>
                            
                                <div className="rounded-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
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
                            {console.log(movie)}
                        
                        </Link>
                    ))}
                </div>
            </div>
        
  
    )
  }
}
