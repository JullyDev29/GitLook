import React, { useReducer } from 'react';

var axios = require('axios');

const liked = []

function sendRate(repo){
        
    var config = {
        method: 'put',
        url: 'https://api.github.com/user/starred/' + repo.full_name,
        headers: { 
            'Authorization': 'Bearer 73b1e7bb8ad70c0b1d739d48987b323e87fa42d8'
        }
    }
        
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });       

createFav(repo);              
};
   

function createFav(repo) {

    var breaks = document.createElement('br')
    var node = document.createElement('a')                
    var textnode = document.createTextNode(repo.name);                    
    node.appendChild(textnode);                                         
    document.getElementById("recentLiked").appendChild(node); 
    document.getElementById("recentLiked").appendChild(breaks);
    node.href = repo.html_url;
    node.classList.add('itemLiked')
}

const Repositories = ({ repo}) =>(
   
    <div id='reposits'>
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col" id='titleX'>Rate</th>
                    <th scope="col" id='titleN'>Name</th>
                    <th scope="col" id='titleR'>Rating</th>
                    <th scope="col" id='titleW'>Watchs</th>
                    <th scope="col" id='titleF'>Forks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id='listRepos'>
                    <td scope="row" id='rate'><button type='button' class="btn btn-outline-dark" id='clickRate' onClick={()=>sendRate(repo)}><span id='star1'>⭐</span></button> </td>
                    <td><a id='repoName' href={repo.html_url}><span id='FUNCIONA'>{ repo.name } <span id='liked'></span></span></a></td>
                    <td id='star'>{ repo.stargazers_count }</td>
                    <td id='watch'>{repo.watchers_count}</td>
                    <td id='forks'>{repo.forks_count}</td>
                    </tr>            
                </tbody>  
            </table>
        </div> 
    </div>
);

export default Repositories;