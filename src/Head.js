import React from 'react';
import logo from './logo.png';


const Head = () => (

    <div className="jumbotron jumbotron-fluid" id='Cab'>
        <div className="container" id='cabAll'>
        <h1 className="display-4" id='TitleGit'>GitLook</h1>     
        <img id ='logo'src={logo} />
            <p className="lead" id='SubTitleGit'>Search for, Learn More</p>
        </div>        
    </div>
);

export default Head;