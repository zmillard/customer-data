import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const endpoint = "http://localhost:4000/customers";

class Customer extends Component {
    constructor(props){
        super(props);

        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
    };
    
    deleteCustomer = (id) => {
        axios.delete(`${endpoint}/${id}`)
    }

    // TODO: Need to be able to enter data here - Form
    editCustomer = () => {
        axios.put(endpoint, { 
            name: 'hello world',
            birthday: 'date'
        });
    }
   
    render(){
        console.log(this.props.data)

        return (
            <div className="Customer">
                <p>Name: {this.props.data.name}</p>
                <p>Birthday: {this.props.data.birthday}</p>
                <button onClick={this.editCustomer}>Edit</button>
                <button onClick={this.deleteCustomer(this.props.data.id)}>Delete</button>
            </div>
        );
    }
}

export default Customer;
