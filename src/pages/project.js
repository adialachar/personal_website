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
      const { title, description, image, website } = passedData

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
              <p>   {description} <br></br> <br></br>hi</p>
              <h3 class="my-3">Project Details</h3>
              <ul>
                <li>Lorem Ipsum</li>
                <li>Dolor Sit Amet</li>
                <li>Consectetur</li>
                <li>Adipiscing Elit</li>
              </ul>
            </div>

          </div>
        </div>
        </Layout>

         
    ) 
   
 }

}
export default project