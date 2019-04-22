import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://cf.ltkcdn.net/socialnetworking/images/std/168796-281x281-girl-swear-icon.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Niharika Sareen</h2>
            <h4 style={{color: 'grey'}}>Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>A highly creative front end developer with 5 years of experience in the service and design industries. Expertise in latest UI technologies such as javascript, html5, foundation for email, sass in both waterfall and agile projects. Designed and coded application components in an agile environment utilising a test driven development approach. Have worked on developing responsive static and dynamically loading webpages. Strong team player with attention to detail and enjoy working in a collaborative environment. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Email</h5>
            <p>niharika.sareen@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>

            <h2>Experience</h2>
             <Experience
                startYear={2018}
                endYear={ "Present"}
                jobName="SLG Agency"
                jobDescription="• Developed front end websites for 2 clients and front end webpages for 4 clients utilizing JavaScripts, jQuery, html5, Bootstrap, Saas, npm, git, gulp and Webpack, ensuring each project to have cross browser compatibility. Conducted unit testing before delivering the final deliverables. "
                />
            <Experience
              startYear={2014}
              endYear={2017}
              jobName="INFOSYS Limited"
              jobDescription="• Created responsive 4 assessment portals for a US based Human Resource firm, using HTML5, Bootstrap, CSS3, JQuery, and JavaScript which supported multiple end users in career progression and skill development. "
              />

             
              <hr style={{borderTop: '3px solid #fff'}} />
            <h2>Education</h2>


            <Education
              startYear={2011}
              endYear={2014}
              schoolName="CHITKARA UNIVERSITY"
              schoolDescription="Masters in Computer Application "/>

               <Education
                 startYear={2010}
                 endYear={2011}
                 schoolName="PANJAB UNIVERSITY"
                 schoolDescription="Post Graduate Diploma in Computer Applications"
                  />
                <hr style={{borderTop: '3px solid #fff'}} />


              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={80}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
