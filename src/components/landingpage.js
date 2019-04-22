import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cf.ltkcdn.net/socialnetworking/images/std/168796-281x281-girl-swear-icon.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Front End Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React </p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
