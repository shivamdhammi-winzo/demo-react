import React, { Component } from "react";

export default class User extends Component {

    state = {
        people: []
    }

    async componentDidMount(){
        const url = "https://api.randomuser.me/?results=5";
        const response = await fetch(url);
        const data = await response.json();
        this.setState(
            {
                people: data.results,
            }
        )
    }
    
    
    render(){
        const peopleJsx = this.state.people.map((person) => (
            <div key={person.login.uuid}>
                <img src={person.picture.large} alt="user pic" />
                <div>{person.name.titile}</div>
                <div>{person.name.first}</div>
                <div>{person.name.last}</div>

            </div>
        ));
        return(
            <div>{peopleJsx}</div>
        )
    }
}