import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MoviesContext } from '../MoviesContext';

class MovieList extends Component {

  onClick = (e) => {
    this.props.deleteMovie(e);
  }

  render() {
    return (
      <div className="content">
        <h1 className="title">Movie list ></h1>
        <div className="row">
          {
            this.context.map((movie) =>
              <div className="col-md-4 p-3" key={movie.id}>
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-title">{movie.title}</h2>
                  </div>
                  <div className="card-body">
                    <h4 className="card-info">Year: {movie.year}</h4>
                    <h4 className="card-info">Duration: {movie.duration} min.</h4>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <button className="btn btn-danger" onClick={() => this.onClick(movie.id)}>
                      Delete
                    </button>
                    <Link className="btn btn-secondary" to={"/edit/" + movie.id}>
                      Update
                    </Link>
                  </div>
                </div>
              </div>)
          }
        </div>
      </div>
    )
  }

}

MovieList.contextType = MoviesContext;
export default MovieList;