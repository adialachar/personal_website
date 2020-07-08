import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Hemlet from 'react-helmet'

import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar';
import CardList from '../components/CardList';
import config from '../../config';
import dev from '../assets/images/dev.svg'

import Flask from './../assets/images/flask-icon.svg'
import Django from './../assets/images/django-logo-negative.svg'

class SiteIndex extends React.Component {
  render() {
    
   

    return (
      <Layout>
         <Sidebar />
         <div className="container-fluid p-0 ">
         <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
        
          <h1 className="mb-0 ">
          👋🏼 Hi, I'm
            <span className="text-primary"> {config.firstName} {config.lastName}</span>
            
          </h1>
          <h2 className="mt-2 mb-5 text-secondary"> I just graduated from UC Riverside!</h2>
          {/* <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div> */}
           <p className="lead mb-5">
                    I recently graduated from UC Riverside with my B.S. in Computer Science in June. 
                    My degree won't be in the mail for a few months, but if you ask me, the real degree was the friends we made along the way. 
                    
                    <br></br>
                    <br></br>
                    Outside of school, I develop web applications. 
                    Most recently in March, I won 3rd place at LA Hacks 2020 with a web application my friends and I built using React, Express, and Flask. 
                    
                 </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
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
              <h3 className="mb-0">NASA Jet Propulsion Laboratory</h3>
              <div className="subheading mb-3">Software Engineering Intern</div>
              <p>
              During my time at JPL, I implemented several features for a JPL HR application that accelerated workflow for the entirety of JPL HR (100+ employees). The stack of the application used Angular 6, FlaskRESTPlus, PostgreSQL, which were all contianed in a Docker container with an NGINX image. 
              <br></br>
              <br/>
              I collaborated with UI/UX designers on our team to convert Sketch mockups into Typescript and HTML/CSS code, and created several REST API endpoints inside the FlaskRESTPlus server. We used SQLAlchemy as our ORM. One of the key features I improved was the application's internal search function. I optimized the SQLAlchemy queries and implemented regular expressions in order to improve the user experience of the search function and more importantly, have it fit the client needs. 
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2019 - August 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Citrus Hack</h3>
              <div className="subheading mb-3">Web Dev Lead</div>
              <p>
                During the 2019-2020 MLH Hackathon season, I was one of the Web Dev Leads for both Cutie Hack and Citrus Hack. For Cutie Hack, we used a Django Rest Framework backend, a React frontend, a PostgreSQL database and we used GraphQL in order to limit the number of API endpoints created. In order to use GraphQL, we implemented graphene-django, a python GraphQL implementation, into the Django RF backend. The website was used by Cutie Hack in order to take the applicaitons of 500+ people. 
            
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2019 - April 2020</span>
            </div>
          </div>
          <div >
          <a key="https://drive.google.com/file/d/1_QKMy6OgK9h8gBRVEIaJibNKabpheV-Y/view?usp=sharing" 
            href ="https://drive.google.com/file/d/1_QKMy6OgK9h8gBRVEIaJibNKabpheV-Y/view?usp=sharing"
            className="btn btn-primary "><i className ="fas fa-download pr-1"></i>
               Download Resume
            </a>
            </div>

          {/* <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Junior Web Designer</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <h5>
                Podcasting operational change management inside of workflows to
                establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail. Keeping your eye
                on the ball while performing a deep dive on the start-up
                mentality to derive convergence on cross-platform integration.
              </h5>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2010 - December 2011</span>
            </div>
          </div> */}

          {/* <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Web Design Intern</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <h5>
                Collaboratively administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after installed
                base benefits. Dramatically visualize customer directed
                convergence without revolutionary ROI.
              </h5>
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
              <h5>Undergraduate Coursework: </h5>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fall 2016 - June 2020</span>
            </div>
          </div> */}

          {/* <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">James Buchanan High School</h3>
              <div className="subheading mb-3">Technology Magnet Program</div>
              <h5>GPA: 3.56</h5>
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
            Programming Languages
          </div>
         
          <ul className="list-inline dev-icons">
            <li className="list-inline-item  mr-5 text-center">
              <i className="fab fa-python"></i>
               <h5>Python </h5> 
            
            </li>
            <li className="list-inline-item mr-5 text-center">
              <i className="fab fa-js-square"></i>
              <h5> Javascript</h5>
            </li>
            <br/> <br/>
            <div className="subheading mb-3">
            Tools
          </div>
            <li className="list-inline-item mr-5 text-center">
              <i className="fab fa-angular"></i>
              <h5> Angular</h5>
            </li>
            <li className="list-inline-item  mr-5 text-center">
              <i className="fab fa-react"></i>
              <h5> React</h5>
            </li>
            <li className="list-inline-item mr-5 text-center">
              <i className="fab fa-node-js"></i>
              <h5> Node</h5>
            </li>

            <li className="list-inline-item mr-5  text-center">
            <img src={Flask}  width="50px" height="50px"/>
              <h5> Flask</h5>
            </li>
            <li className="list-inline-item mr-5 text-center">
            <img  src={Django} width="50px" height="50px" />
              <h5> Django</h5>
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
          <h5>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </h5>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </h5>
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
            <li style={{fontSize:"25px"}}> 
              <i className="fa-li fa fa-trophy text-warning"></i>
              3<suh5>rd</suh5> Place - LA Hacks 2020 - CheaterBeater
            </li>
            <li style={{fontSize:"25px"}}>
              <i className="fa-li fa fa-trophy text-warning"></i>
             1<suh5>st</suh5> Place - GEICO Hacktivates Hackathon 2019 - Baut
            </li>
            <li style={{fontSize:"25px"}}>
              <i className="fa-li fa fa-trophy text-warning"></i>
                Top 30 - Pennapps XX - Toor              
            </li>
            <li style={{fontSize:"25px"}}>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Best UI/UX and Best use of Twilio - Citrus Hack 2019 - Joyride
            </li>
            {/* <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<suh5>nd</suh5>
              Place - University of Colorado Boulder - Emerging Tech Competition
              2008
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<suh5>st</suh5>
              Place - James Buchanan High School - Hackathon 2006
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>3<suh5>rd</suh5>
              Place - James Buchanan High School - Hackathon 2005
            </li> */}
          </ul>
        </div>
      </section>
    </div>
    <hr className="m-10" />
    <footer>

     <div class="col-md-6">
       <div class="copyright text-sm font-weight-bold text-center text-md-left">© 2020 <a href="" class="font-weight-bold" target="_blank">Aditya Acharya</a>. All rights reserved</div></div>
    </footer>
        
      </Layout>
    )
  }
}

export default SiteIndex


