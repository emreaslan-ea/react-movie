import React from 'react';
// import { Routes, Route, Link } from "react-router-dom";
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
  

  // Delete from list & update the state
  DeletedMovie = (movie) =>{
    const newMovieList = this.state.movies.filter(m => !(m.id === movie.id));

    this.setState({
      movies : newMovieList
    })

  }

  // search movie on the List
  searchMovie = (input) =>{
    this.setState({
      inputSearch : input
    })
    
  }
  
  // get data from API  on trend state
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
    
    // filter movies on search input value
    let filteredMovies = this.state.movies.filter(movie =>{
      if(movie.title){return movie.title.toLowerCase().indexOf(this.state.inputSearch.toLowerCase()) !== -1;}
      else{return movie.name.toLowerCase().indexOf(this.state.inputSearch.toLowerCase()) !== -1;}
    })


    
    return (
      <div>
            <Nav />
            <SearchBar />
            <TrendMovies trendMovies = {filteredMovies} trendScale ={this.switchTrendScale}/>
            <FilmList movies={filteredMovies} deleteMovieProp={this.DeletedMovie}/>
      </div>
    );
    
  }

}

