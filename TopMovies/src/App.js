import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import CreateMovie from './components/CreateMovie';
import MovieList from './components/MovieList';
import './components/styles/normalize.css';
import './components/styles/style.css';
import { MoviesContext } from './MoviesContext';

export default class App extends Component {

  state = {
    movies: []
  }

  addMovie = (title, year, duration) => {
    var newId = 0;
    if(this.state.movies.length !== 0) {
      const lastPosition = this.state.movies.length - 1;
      newId = this.state.movies[lastPosition].id + 1;
    }
    const newMovie = {
      id: newId,
      title: title,
      year: year,
      duration: duration
    };
    this.setState({
      movies: [...this.state.movies, newMovie] //Adding new element to movies array
    });
  }

  deleteMovie = (id) => {
    const newArray = this.state.movies.filter(movie => movie.id !== id);
    this.setState({ movies: newArray });
  }

  getMovie = (id) => {
    const movie = this.state.movies.filter(movie => movie.id == id);
    if (movie) {
      return movie[0];
    }
    else {
      return false;
    }
  }

  updateMovie = async (id, title, year, duration) => {
    const updatedArray = await this.state.movies.filter(movie => movie.id != id);
    const newMovie = {
      id: parseInt(id),
      title: title,
      year: year,
      duration: duration
    };
    updatedArray.push(newMovie)
    updatedArray.sort((a, b) => (a.id > b.id) ? 1 : -1)
    await this.setState({
      movies: updatedArray
    });
  }

  render() {
    return (
      <div className="App">
        <MoviesContext.Provider value={this.state.movies}>
          <Router>
            <Nav />
            <Switch>
              <Route path="/create-movie" render={(props) => <CreateMovie {...props} addMovie={this.addMovie} />} />
              <Route path="/movie-list" render={(props) => <MovieList {...props} deleteMovie={this.deleteMovie} />} />
              <Route path="/edit/:id" render={(props) => <CreateMovie {...props} getMovie={this.getMovie} updateMovie={this.updateMovie} />} />
              <Route path="/"> <Home /> </Route>
            </Switch>
            <Footer />
          </Router>
        </MoviesContext.Provider>
      </div >
    )
  }

}