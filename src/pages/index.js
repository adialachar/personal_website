import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Hemlet from 'react-helmet'

import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar';
import CardList from '../components/CardList';
import config from '../../config';


class SiteIndex extends React.Component {
  render() {
    
   

    return (
      <Layout>
         <Sidebar />
         <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I am an undergraduate CS student at the University of California Riverside graduating in June of 2020. 
            Outside of school, I enjoy making side projects and competing in hackathons with my friends.
            <br></br>
            <br></br>
            Most of my projects focus on web development (Flask/Django/React)
            but I'm always looking to learn new frameworks and languages.
          </p>
          <div className="social-icons">
            {/* {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })} */}
            <a key="https://github.com/adialachar" href ="https://github.com/adialachar">
              <i className={`fab fa-github`}></i>
            </a>
            <a key="https://linkedin.com/in/aacha002/" href ="https://linkedin.com/in/aacha002/">
              <i className={`fab fa-linkedin-in`}></i>
            </a>

          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section curve p-3 p-lg-5 d-flex justify-content-center"
        id="projects"
      >
        
      <CardList/> 

        
        
        
       

        
        
      </section>
       
      <hr className="m-0" />

       <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
         
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineering Intern</h3>
              <div className="subheading mb-3">NASA JPL</div>
              <p>
              I developed features for JPL HR metrics application with Angular, Flask, and PostgreSQL used by entirety of JPL. 
              I Created and modeled Angular components to fit Sketch mockup and make API calls to Flask endpoints
              and built scripts in Python to automate population of Postgres database
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2019 - August 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web Dev Lead</h3>
              <div className="subheading mb-3">Citrus Hack</div>
              <p>
                Citrus Hack is UCR's premier hackathon. I was the web dev co-lead creating both cutiehack.io and citrushack.com for the 2019-20 hackathon season. I created mockups in Figma, implemented those mockups in React, and installed a Django RF backend with GraphQL in the backend for Cutie Hack. This application was used by 500+ people.
              <br></br>
              <br></br>
            For Citrus Hack, we primarily used React for the stack of the website. 
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2019 - April 2020</span>
            </div>
          </div>
          <div className="DLResume" style={{backgroundColor: "#6F42C1", width: '20%', height: '10%', borderRadius: '100px', marginLeft: '45%'}}>
          <a key="https://drive.google.com/file/d/1dqatR1CI5Jeqb6pUvsowVBtmMpfnABr2/view?usp=sharing" 
            href ="https://drive.google.com/file/d/1dqatR1CI5Jeqb6pUvsowVBtmMpfnABr2/view?usp=sharing"
            style={{textAlign: 'center', fontFamily: 'Muli', color: 'white', width: '15%' }}
            >
              <i className={`fas fa-file-download`} style={{fontFamily: 'Muli', paddingTop: '15%', paddingLeft:'12%'}}>   Download Resume</i>
            </a>
            </div>

          {/* <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Junior Web Designer</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>
                Podcasting operational change management inside of workflows to
                establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail. Keeping your eye
                on the ball while performing a deep dive on the start-up
                mentality to derive convergence on cross-platform integration.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2010 - December 2011</span>
            </div>
          </div> */}

          {/* <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Web Design Intern</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits. Dramatically visualize customer directed
                convergence without revolutionary ROI.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2008 - June 2010</span>
            </div>
          </div> */}
        </div>
      </section>
       
      <hr className="m-0" /> 

       
      {/* <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of California Riverside</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science</div>
              <p>Undergraduate Coursework: </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fall 2016 - June 2020</span>
            </div>
          </div> */}

          {/* <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">James Buchanan High School</h3>
              <div className="subheading mb-3">Technology Magnet Program</div>
              <p>GPA: 3.56</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2002 - May 2006</span>
            </div>
          </div> */}
        {/* </div>
      </section> */}

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            

          </ul>

          {/* <div className="subheading mb-3">Workflow</div> */}
          {/* <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul> */}
        </div>
      </section>

      {/* <hr className="m-0" /> */}

      {/* <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section> */}

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              3<sup>rd</sup> Place - LA Hacks 2020 - CheaterBeater
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
             1<sup>st</sup> Place - GEICO Hacktivates Hackathon 2019 - Baut
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
                Top 30 - Pennapps XX - Toor              
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Best UI/UX and Best use of Twilio - Citrus Hack 2019 - Joyride
            </li>
            {/* <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<sup>rd</sup>
              Place - James Buchanan High School - Hackathon 2005
            </li> */}
          </ul>
        </div>
      </section>
    </div>
        
      </Layout>
    )
  }
}

export default SiteIndex


