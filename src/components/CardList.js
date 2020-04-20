import React from'react'
import {Link} from 'gatsby'

import projectsData from '../data/projects'


class CardList extends React.Component {
    render() {

        return (
          <div className="row">
            {projectsData.map(p => (
              <div className="col-md-4 p-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={p.image}
                    alt="Card image cap"
                    href="/project"
                  ></img>
                  <div className="card-body">
                    <h5 class="card-title">{p.title}</h5>
                    <p className="card-text">{p.description} </p>
                    <Link className="stretched-link" to={'/project'} state={p}/>
                      
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
    }



}

export default CardList