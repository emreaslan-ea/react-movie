import {React, useEffect, useState} from 'react';
import FilmList from './components/FilmList';
import SearchBar from './components/SearchBar';
import TrendMovies from './components/TrendMovies';
import  Nav  from './components/Nav';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import MoviePart from './components/MoviePart';
import Footer from './components/Footer';
import UpcomingMovies from './components/UpcomingMovies';


function App(){

  const [movies,setMovies] = useState([]);
  const [inputSearch,setInputSearch] = useState("");
  

  // Delete from list & update the state
  const DeletedMovie = (movie) =>{
    const newMovieList = movies.filter(m => !(m.id === movie.id));

    setMovies(newMovieList);
  }

  // search movie on the List
  const searchMovie = (input) =>{
    setInputSearch(input);
  }
  
  // get data from API  on trend state
  const switchTrendScale = async (trendperiod) => {
    if(trendperiod === true){
      const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
      const responseData = await response.json();

      setMovies(responseData.results)

    }else{
      const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
      const responseData = await response.json();
      
      setMovies(responseData.results)

    }
  }
 
  const data = async () =>{
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
    const responseData = await response.json();
    
    setMovies(responseData.results)
  }

  useEffect( () =>{
    data();
  },[]);
    
 
    // filter movies on search input value
    let filteredMovies = movies.filter(movie =>{
      if(movie.title){return movie.title.toLowerCase().indexOf(inputSearch.toLowerCase()) !== -1;}
      else{return movie.name.toLowerCase().indexOf(inputSearch.toLowerCase()) !== -1;}
    })


    
    return (
      
      <div className='bg-[#14181c]'>
      <Nav />
      
      <Routes>
        <Route path='/' element={
          <>
            
            <SearchBar inputData={searchMovie}/>
            <TrendMovies trendMovies = {filteredMovies} trendScale ={switchTrendScale}/>
            <UpcomingMovies trendMovies = {filteredMovies}/>
            <FilmList movies={filteredMovies} deleteMovieProp={DeletedMovie}/>
            
          </>
        }/>
        <Route path='/:id' element={<MoviePart/>}/>
      </Routes>
      <Footer />
      
      </div>
    )
    
  

}

export default App;