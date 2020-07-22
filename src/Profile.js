import React from 'react';

const Profile = ({ user }) => (

    <div id='profile'>
        <img id='avatar' src={user.avatar_url} />  
        <span id='name'>Name: {user.login}</span> 
         <ul id='itensProfile'>  
            <li>
                 <span id='repos'><span id='repNumber'> N. Repositories: </span> {user.public_repos}</span>
            </li>            
            <li> 
                <span id='followers'><span id='followersNumber'>Followers: </span>{user.followers}</span>
            </li>   
            <li>
                <span id='following'><span id='followingNumber'>Following: </span>{user.following}</span>
            </li>            
                 <a id='profileUrl' href={user.html_url}><button id='btnProfile' className='type="button" class="btn btn-dark'>Go to profile</button> </a> 
        </ul>
    </div>
);

export default Profile;