import React, { Component } from 'react';

export default class CreateMovie extends Component {

  state = {
    title: "",
    year: "",
    duration: ""
  }

  componentDidMount = () => {
    const id = this.props.match.params.id;
    if(id) {
      const movie = this.props.getMovie(id);
      this.setState({title: movie.title, year: movie.year, duration: movie.duration});
    }
  }

  //Same function for all inputs
  onChangeInput = async (e) => {
    await this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  }

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    if(id) {
      this.props.updateMovie(id, this.state.title, this.state.year, this.state.duration);
      this.props.history.push("/movie-list");
    }
    else {
      this.props.addMovie(this.state.title, this.state.year, this.state.duration);
      this.props.history.push("/movie-list");
    }
  }

  render() {
    return (
      <div className="content">
        <h1 className="title">Create movie ></h1>
        <form className="create-movie-form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="movie-title">Title</label>
            <input value={this.state.title} name="title" onChange={this.onChangeInput} type="text" className="form-control" id="movie-title" placeholder="Enter title" required />
          </div>
          <div className="form-group">
            <label htmlFor="movie-year">Year</label>
            <input value={this.state.year} name="year" onChange={this.onChangeInput} type="number" min="1" className="form-control" id="movie-year" placeholder="Enter year" required />
          </div>
          <div className="form-group">
            <label htmlFor="movie-duration">Duration (min.)</label>
            <input value={this.state.duration} name="duration" onChange={this.onChangeInput} type="number" min="1" className="form-control" id="movie-duration" placeholder="Enter duration" required />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Save movie</button>
        </form>
      </div>
    )
  }

}