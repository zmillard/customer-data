import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Customer from './Customer';

const endpoint = "http://localhost:4000/customers";

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        customers: []
    };

    this.addCustomer = this.addCustomer.bind(this);
    this.getCustomer = this.getCustomer.bind(this);
    this.getCustomers = this.getCustomers.bind(this);

  };

  // Need a means of adding data - form
  addCustomer = () => {
    let data = {
      name: 'John Doe',
      birthday: 'any',
      id: 0
    }
    axios.post(endpoint, data);
  }

  // Need to find a place to use this
  getCustomer = (id) => {
    axios.get(`${endpoint}${id}`)
    .then(res => {
      this.setState({customers: (this.state.customers).push(res.data)});
    })
  }

  getCustomers = () => {
    axios.get("http://localhost:4000/customers")
    .then(res => {
      console.log(res.data);
      this.setState({customers: res.data});
    })
  }

  render() {
    let customers = this.state.customers;
    console.log('customers', customers);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Customer Data</h1>
          <ul>
          {customers.map(function(customer){
            return <li>
              <Customer data={customer} />
            </li>;
          })}
          </ul>
          <button onClick={this.addCustomer}>Add</button>
          <button onClick={this.getCustomers}>Update Customers</button>
        </header>
      </div>
    );
  }
}

export default App;
