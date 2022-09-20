import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SearchBar(){

    const [searchMovie, setSearchMovie] = useState("");
    const [searchData, setSearchData] = useState({errors: ['query must be provided']});

    const dataSearchMovie = async () =>{
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchMovie}&pageg=1&include_adult=false`);
        const responseData = await response.json();
            
        setSearchData(responseData);
            
    }
    console.log(searchData);
    console.log(searchMovie);

    useEffect( () =>{
        dataSearchMovie();
    },[searchMovie]);

    return (
        <div className='relative z-30'>
            
            <div className='absolute text-slate-600 font-head inset-0'>
                <h1 className='absolute  text-6xl top-48 left-48'>WELCOME TO THE</h1>
                <h1 className='absolute text-6xl top-72 right-56'>MOVIE CLUB</h1>
                <h1 className='absolute text-6xl top-96 left-16'>FIRST RULE IS...</h1>
            </div>


            <img className='-z-20 absolute opacity-60 h-[48rem]' src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg" alt=""/>
            <img className='absolute -z-10 w-full  h-[48rem] aspect-[12/5] opacity-100s' alt="" src="https://imgs.search.brave.com/pVL4eQl5R1V8wtwjMhxzt9Zmx3xANfKzBIywIjSqhrI/rs:fit:1200:1144:1/g:ce/aHR0cHM6Ly93d3cu/ZGFuY2V3aXRobWUu/dXMvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDMvYmxhY2st/ZmFkZS1mdWxsLnBu/Zw"></img>



            <div className="lg:w-2/5 w-full mx-auto pt-[32rem] ">
                <label className="relative block mt-5 mx-6 h-16">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-9 h-9 text-slate-400 ">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <input onChange={(e) => {
                        setSearchMovie(e.target.value);
                    }} className="text-2xl h-16 placeholder:italic placeholder:text-slate-400 block bg-slate-300 w-full border border-slate-300 rounded-full py-2 pl-16 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" placeholder="Search for movie..." type="text" name="search" />

                    <ul className='text-white flex flex-col divide-y-[0.5px] divide-slate-400 z-50'>
                        { !(searchData.errors) ? searchData.results.map(movie =>(

                            <Link to={`/${movie.id}`} className='cursor-pointer hover:ring-4 hover:scale-105 ring-sky-800 transition duration-500 flex items-center justify-between bg-slate-500 rounded-lg'>
                                
                                <div className='pl-3 py-5'>
                                    <p>{movie.title} <h1><span className='text-gray-300 text-sm'>{movie.release_date ? movie.release_date.toString().slice(0,4) : movie.title}</span></h1></p>
                                </div>
                                

                                <div className='pr-3 py-2'>
                                    <img
                                        alt=""
                                        className="object-cover w-16 "
                                        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                                    />
                                </div>


                            </Link>

                        )) : console.log(searchData)}
                    </ul>

                </label>
            </div>
        


        </div>
    )
  
}
export default SearchBar;