import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    render(){
        return (
        <div>
            <h1>{this.props.title}</h1>
            <User>Ruth</User>
            <User></User>
            <User age="50">Ruthlina</User>
            <User age="1">Rumio</User>
        </div>
        )
    }
}

export default Users;