import React from 'react';

const SearchBar = (props) =>{

  
    return (
        <div className='relative z-30'>
            
            <div className='absolute text-slate-600 font-head inset-0'>
                <h1 className='absolute  text-6xl top-32 left-56'>WELCOME TO THE</h1>
                <h1 className='absolute text-6xl top-52 right-56'>MOVIE CLUB</h1>
                <h1 className='absolute text-6xl top-80 left-16'>FIRST RULE IS...</h1>
            </div>


            <img className='-z-20 absolute opacity-60' src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg" alt=""/>
            <img className='absolute -z-10 w-full  aspect-[12/5] opacity-100s' alt="" src="https://imgs.search.brave.com/pVL4eQl5R1V8wtwjMhxzt9Zmx3xANfKzBIywIjSqhrI/rs:fit:1200:1144:1/g:ce/aHR0cHM6Ly93d3cu/ZGFuY2V3aXRobWUu/dXMvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDMvYmxhY2st/ZmFkZS1mdWxsLnBu/Zw"></img>



            <div className="lg:w-2/5 w-full mx-auto pt-[25rem] ">
                <label className="relative block mt-5 mx-6 h-16">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-9 h-9 text-slate-400 ">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <input onChange={(e) => {
                        props.inputData(e.target.value);
                    }} className="text-2xl h-16 placeholder:italic placeholder:text-slate-400 block bg-slate-300 w-full border border-slate-300 rounded-full py-2 pl-16 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1" placeholder="Search for movie..." type="text" name="search" />
                </label>
            </div>



        </div>
    )
  
}
export default SearchBar;