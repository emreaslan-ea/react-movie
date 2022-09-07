import React from 'react';
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import FilmList from './components/FilmList';
import SearchBar from './components/SearchBar';
import TrendMovies from './components/TrendMovies';
import Nav from './components/Nav';
import './index.css';


export default class App extends React.Component {
  constructor(){
    super();

    this.switchTrendScale = this.switchTrendScale.bind(this);
  }
  state ={
    movies : [],

    inputSearch : ""

  }
  


  DeletedMovie = (movie) =>{
    const newMovieList = this.state.movies.filter(m => !(m.id === movie.id));

    this.setState({
      movies : newMovieList
    })

  }

  searchMovie = (input) =>{
    this.setState({
      inputSearch : input
    })
    
  }
  
  async switchTrendScale (trendperiod) {
    if(trendperiod === true){
      const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
      const responseData = await response.json();

      this.setState({
        movies : responseData.results
      })

    }else{
      const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
      const responseData = await response.json();
      
      this.setState({
        movies : responseData.results
      })

    }
  }

  async componentDidMount(){
    
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`);
    const responseData = await response.json();
    
    this.setState({
      movies : responseData.results
    })
    
  }
  
  
  render(){
    
    let filteredMovies = this.state.movies.filter(movie =>{
      if(movie.title){return movie.title.toLowerCase().indexOf(this.state.inputSearch.toLowerCase()) !== -1;}
      else{return movie.name.toLowerCase().indexOf(this.state.inputSearch.toLowerCase()) !== -1;}
    })


    
    return (
      
      <BrowserRouter>
      
        <Routes>
        
          <Route path="/" element={<Nav />}>
          

            <Route path="/list" element={<FilmList movies={filteredMovies} deleteMovieProp={this.DeletedMovie}/>}/>
            <Route path="/trends" element={<TrendMovies trendMovies = {filteredMovies} trendScale ={this.switchTrendScale}/>}/>
            <Route path="/films" element={<FilmList movies={filteredMovies} deleteMovieProp={this.DeletedMovie}/>}/>


          
          
            {/* <SearchBar inputData = {this.searchMovie}/> */}
            
            {/* <Route path='/trends'>
              <TrendMovies trendMovies = {filteredMovies} trendScale ={this.switchTrendScale}/>
            </Route>

            <FilmList movies={filteredMovies} deleteMovieProp={this.DeletedMovie}/> */}
            
          </Route>
          
            
        </Routes>
        
        <Outlet />
        
      </BrowserRouter>
    
    
    );
    
  }

}

