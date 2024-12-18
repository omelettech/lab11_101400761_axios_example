import React, {Component} from 'react';
import axios from 'axios';

class PersonList extends Component {
    // Define state default values
    state = {
        persons: []
    };

    // Component Lifecycle Callback: Fetch data when component mounts
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({persons});
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        const {persons} = this.state;

        return (
            <div>
                <h1>Person List</h1>
                <ul>
                    {persons.map(person => (

                        <li key={person.login.uuid} style={{listStyle:"none"}}>
                            <div style={{
                                width: "90%",
                                height: "fit-content",
                                padding: 20,
                                backgroundColor: "#4B4376",
                                margin: "10px"
                            }}>

                                <img src={person.picture.thumbnail} alt={person.name.first}/>
                                <p>{person.name.first} {person.name.last}</p>
                                <p>{person.email}</p>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PersonList;
