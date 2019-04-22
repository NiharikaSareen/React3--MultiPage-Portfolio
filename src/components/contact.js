import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Niharika Sareen</h2>
            <img
              src="https://cf.ltkcdn.net/socialnetworking/images/std/168796-281x281-girl-swear-icon.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                A highly creative front end developer with 5 years of experience in the service and design industries. Expertise in latest UI technologies such as javascript, html5, foundation for email, sass in both waterfall and agile projects. Designed and coded application components in an agile environment utilising a test driven development approach. Have worked on developing responsive static and dynamically loading webpages. Strong team player with attention to detail and enjoy working in a collaborative environment.
             </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    niharika.sareen@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-github" aria-hidden="true"/>
                    /NiharikaSareen
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
