import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    state = {
        users: [
        {name:"Ruth", age:24},
        {name:"Ruthy", age:40},
        {name:"Ruthliana", age:1},
        ],
        title:"Users List"
    }


    makeMeYounger = () => {
        const newState = this.state.users.map((user)=>{
            const tempUser = user;
            tempUser.age -=5;
            return tempUser;
        });
        this.setState({
            newState
        });
    }


    render(){
        return (
        <div>
            <button onClick ={this.makeMeYounger}>Make us 5 years younger</button>
            <br/>
            <h1>{this.state.title}</h1>
            {
             this.state.users.map((user)=>{
                 return <User age={user.age}>{user.name}</User>
             })
            }
            
        </div>
        )
    }
}

export default Users;