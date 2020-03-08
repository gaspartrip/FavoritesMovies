import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-nav">
          <div className="container">
            <div className="navbar-brand">
              <p>TopMovies</p>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle Nav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" activeStyle={{ color: "cyan", fontWeight: "bolder" }} exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeStyle={{ color: "cyan", fontWeight: "bolder" }} to="/create-movie">Create movie</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeStyle={{ color: "cyan", fontWeight: "bolder" }} to="/movie-list">Movie list</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav >
      </React.Fragment>
    )
  }

}