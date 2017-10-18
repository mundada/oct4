import React, { Component } from 'react';
class Ashish extends Component {
   var Comment = React.createClass({
    Login: function () {
        alert('Enter UserId');
    },
    signup: function (){
        aleart('Enter Details');
    },

    render: function () {
        return (
            <div ClassName= "commentContainer">
                <div className="commentText">How are you doing</div>

                <button onClick={this.Login} className="button-primary">Login</button>
                <button onClick={this.edit} className="button-primary">Signup</button>
                </div>
        );
    }

    });

  
export default Eventhandling;
