import React from 'react';

export default class SearchBar extends React.Component {

  render() {
    return (
        <div className="lg:w-4/5 w-full mx-auto">
            <label className="relative block mt-5 mx-6">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-slate-400 ">
                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                    </svg>
                </span>
                <input onChange={(e) => { 
                        this.props.inputData(e.target.value);
                    }}  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for movie..." type="text" name="search" />
            </label>
  
        </div>
    )
  }
}
