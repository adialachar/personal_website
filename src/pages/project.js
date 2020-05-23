import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar2 from '../components/Sidebar2';

export class project extends Component {

 render() {
    const passedData = this.props.location.state || {
        title: 'default title',
        description: 'default description',
        image: 'https://via.placeholder.com/350',
        website: 'https://via.placeholder.com',
      }
      const { title, description, image, website, extended, videodemo, newsarticle ,language1,language2,tech1,tech2,tech3, tech4} = passedData

    return (
       
      <Layout>
      <Sidebar2 />
        <div class="container">
          
          <div className="mt-5">
          <Link to="/#projects"> <i class="fas fa-chevron-left fa-2x"></i></Link>
          </div>
          <hr className="m-10" />

          <h1 class="my-4">{title}
            
          </h1>

          
          <div class="row">

            <div class="col-md-8">
              <img class="img-fluid" src={image} alt="/"/>
              {/* <h3 class="my-3">Project Description</h3>
              <p>   {description} <br></br></p> <p> <div dangerouslySetInnerHTML={{__html: videodemo}} /> </p> <p><div dangerouslySetInnerHTML={{__html: newsarticle}} /></p> <p>{extended}</p> */}
            <div className="dev-icons"> <div style={{float:"left", fontSize:"25px"}}><i className="fab fa-github"></i>   Source</div><div style={{float:"right",fontSize:"25px"}}> <i class="fab fa-youtube"></i>    Video Demo</div></div>
            <br></br><br></br> <br/>
            <div>   {description} <br></br></div> <p>  </p> <p></p> <p>{extended}</p>
            </div>

            <div class="col-md-4">
              <h3 class="my-3">Languages</h3>
              <img class="img-fluid" src={language1} alt="/"style={{width:"20%"}}/> <img class="img-fluid" src={language2} alt="/" style={{width:"20%"}}/> 
              <br/><br/><br/><br/>
              <h3 class="my-3">Technologies</h3>
              <img class="img-fluid" src={tech1}  style={{width:"30%"}}/> <img class="img-fluid" src={tech2} style={{width:"20%"}}/> 
              <br/> <br/>
              <img class="img-fluid" src={tech3}  style={{width:"20%", marginLeft:"7%"}}/><img class="img-fluid" src={tech4}  style={{width:"20%", marginLeft:"7%"}}/>
              {/* <h3 class="my-3">Stack</h3> */}
              {/* <ul>
                <li>{backend}</li>
                <li>{frontend}</li>
                <li>{misc1}</li>
                <li>{misc2}</li>
              </ul> */}
            </div>

          </div>
        </div>
        </Layout>

         
    ) 
   
 }

}
export default project