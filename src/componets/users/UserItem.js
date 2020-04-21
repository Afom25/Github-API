import React, { Component } from 'react';
import PropTypes from 'prop-types';

const UserItem = ({user: {login, html_url,avatar_url }}) => {
     
        return ( <div className="card text-center">
                <img src={avatar_url} alt=""  className="round-img" style={{backgroundColor:'red' ,width:'70px' }} />
                <h5>{login}</h5>
            <div>
                <a href={html_url} className="btn btn-dark">More</a>
            </div>
            </div>);
          
    
}
UserItem.propTypes = {
    user:PropTypes.object.isRequired
}
 
export default UserItem;