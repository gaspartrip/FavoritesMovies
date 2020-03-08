import React, { Component } from 'react';

export default class Home extends Component {

  render() {
    return (
      <div className="content">
        <h1 className="title">Home ></h1>
        <section>
          <img className="home-photo" src="https://picsum.photos/700/400" alt="random" />
        </section>
      </div>
    )
  }

}