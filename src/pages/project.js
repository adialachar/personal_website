import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar';

export class project extends Component {

 render() {
    const passedData = this.props.location.state || {
        title: 'default title',
        description: 'default description',
        image: 'https://via.placeholder.com/350',
        website: 'https://via.placeholder.com',
      }
      const { title, description, image, website, extended, videodemo, newsarticle } = passedData

    return (
       
      <Layout>
      <Sidebar />
        <div class="container">
          
          <div className="mt-5">
          <Link to="/"> <i class="fas fa-chevron-left fa-2x"></i></Link>
          </div>
          <hr className="m-10" />

          <h1 class="my-4">{title}
            
          </h1>

          
          <div class="row">

            <div class="col-md-8">
              <img class="img-fluid" src={image} alt="/"/>
            </div>

            <div class="col-md-4">
              <h3 class="my-3">Project Description</h3>
              <p>   {description} <br></br></p> <p> <div dangerouslySetInnerHTML={{__html: videodemo}} /> </p> <p><div dangerouslySetInnerHTML={{__html: newsarticle}} /></p> <p>{extended}</p>
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