import React from'react'
import {Link} from 'gatsby'

import projectsData from '../data/projects'


class CardList extends React.Component {
    render() {

        return (
          <div>
            <h2 className="mb-5">Projects</h2>
          <div className="row">
           
            {projectsData.map(p => (
              <div className="col-md-4 p-3 d-flex">
                <div className="card">
                  <img
                    className="card-img-top flex-fill"
                    src={p.image}
                    alt="Card image cap"
                    href="/project"
                  ></img>
                  <div className="card-body flex-fill">
                    <h5 class="card-title">{p.title}</h5>
                    <p className="card-text">{p.description} </p>
                    <Link className="stretched-link" to={'/project'} state={p}/>
                      
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        );
    }



}

export default CardList