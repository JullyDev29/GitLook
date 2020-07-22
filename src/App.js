import React, { Component } from 'react';
import Head from './Head';
import axios from 'axios';
import Profile from './Profile';
import Repositories from'./Repositories';
import linkedin from './linkedin.png';
import outlook from './outlook.png'; 
import git from './git.png';

var config = {
  method: 'put',
  url: '',
      'Authorization': 'Bearer 5e67bdc48c9637eb5b433578b1804452e1e336eb'
  }

class App extends Component {

  constructor(){
    super();
    this.state = {
      github: {
        url: 'https://api.github.com/users',
        client_id: 'fbbdba927b1bc999e5b7',
        client_secret: '8cbdb33291b2e57e3f905445b8c29d2d5b5e4ad3',
        count: 7, 
        sort: 'created: asc',
        
      },
      user: [],
      repos: [],
      send: [],
    };
  }


  searchUser = (e) => {
    
    const user = e.target.value;
    const { url, client_id, client_secret, count, sort } = this.state.github;
      axios 
        .get(
          `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
        )
        .then(({ data }) => this.setState({ user: data}));
        
        axios
        .get(
          `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
        )
        .then(({ data}) => this.setState({ repos: data }));
    }    

    searchRepository = () => {
      const { user, repos, send } = this.state;   
      return(
        
      <div id='allRepo'>
        <Profile user={user} />
          
        <div id='rep'>                     
          {repos.map(repo => <Repositories key={repo.name} repo ={repo} />)}        
        </div>        
      </div>
      )
    }     
    
  render() {
    
    return (
      <div className="App">
            <Head /> 
            <div id='recentLiked'>
              <h4 id='fav'>♥ Recent Liked ♥</h4>              
            </div>
            <div className="form-group" id='searchDiv'>
              <label id='searchTitle'>Search Github Profile</label>
              <input onChange={this.searchUser} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
              <small id="emailHelp" className="form-text text-muted">
                  show your gratitude by marking a star if you liked it</small>
            </div>  

           <h2>Repository</h2>
          
          <div id='profileTab'>
            { this.state.user.length !== 0  ? this.searchRepository() : null }
          </div>

          <nav class="navbar navbar-dark bg-dark" id='footer'>
              <p id='dev'>Created By Jully  </p>
              <a id='myLink' href='https://www.linkedin.com/in/julia-ponce-dev29/'><img id='linked'src={linkedin} ></img></a>
              <a id='myOut' href='mailto:jully_dev29@outlook.com?subject=Hello%20again'><img id='linked'src={outlook} ></img></a>              
              <a id='myGit' href='https://github.com/JullyDev29'><img id='linked'src={git} ></img></a>
          </nav>         
          
      </div>   
    );
  }
}


export default App;
