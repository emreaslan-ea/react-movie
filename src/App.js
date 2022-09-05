import React from 'react';
import FilmList from './components/FilmList';
import SearchBar from './components/SearchBar';
import TrendMovies from './components/TrendMovies';
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
      
      
      // if(this.state.movies === responseData.results){
      //   console.log("days eşit");
      // }else{
      //   console.log("days eşit değil");
      // }

      this.setState({
        movies : responseData.results
      })

      console.log("day");
      console.log(responseData.results);

    }else{
      const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
      const responseData = await response.json();
      
      this.setState({
        movies : responseData.results
      })
      console.log("week");
      console.log(responseData.results);
      // if(this.state.movies === responseData.results){
      //   console.log("weeks eşit");
      // }else{
      //   console.log("weeks eşit değil");
      // }

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
      <div className="lg:w-4/5 w-full mx-auto ">
        <SearchBar inputData = {this.searchMovie}/>
        <TrendMovies trendMovies = {filteredMovies} trendScale ={this.switchTrendScale}/>
        <FilmList movies={filteredMovies} deleteMovieProp={this.DeletedMovie}/>
      </div>
    );
    
  }

}

