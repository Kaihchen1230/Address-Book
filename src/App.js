import React, { Component } from 'react';
import {generate} from 'randomstring';
import AddressBook  from './AddressBook/AddressBook';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Emoji from 'react-emoji-render';

import './App.css';

class App extends Component {

  state = {
    addressBook: [
      {
        id : generate(10),
        FirstName : 'Cathy',
        LastName : 'Pierce',
        Birthday : '9/14/1996',
        Telephone : '200-910-8132'
      },
      {
        id : generate(10),
        FirstName: 'Alfonso',
        LastName: 'Cooley',
        Birthday: '8/10/1973',
        Telephone: '200-657-9362'
      },
      {
        id : generate(10),
        FirstName: 'Victor',
        LastName: 'Gordon',
        Birthday: '8/3/1970',
        Telephone: '200-661-9407'
      },
      {
        id : generate(10),
        FirstName: 'Colleen',
        LastName: 'Wright',
        Birthday: '10/28/1967',
        Telephone: '200-250-7949'
      },
      {
        id : generate(10),
        FirstName: 'James',
        LastName: 'Johnston',
        Birthday: '5/11/1972',
        Telephone: '200-645-3176'
      },
      {
        id : generate(10),
        FirstName: 'Anna',
        LastName: 'Reyes',
        Birthday: '9/10/1975',
        Telephone: '200-707-8670'
      }
    ],
    newFirstName: '',
    newLastName: '',
    newBirthday: '',
    newTelephone: '',
    search : ''
  };

  addContactHandler = (event) => {
    event.preventDefault();

    let newContact = {
      id: generate(10),
      FirstName: this.state.newFirstName,
      LastName: this.state.newLastName,
      Birthday: this.state.newBirthday,
      Telephone: this.state.newTelephone
    };

    // if(!this.state.newFirstName || !this.state.newLastName || !this.state.newBirthday || !this.state.newTelephone){
    //   alert('you did not complete all of the flieds!!');
    // }

    this.setState({
      addressBook: [...this.state.addressBook, newContact]
    })
    this.setState({
      newFirstName: '',
      newLastName: '',
      newBirthday: '',
      newTelephone: ''
    });
  }

  render() {

  
    return (
      <div className="App">
        <Container>
          <header>
            <h1>React Addressbook</h1>
          </header>
          
          <input 
            id = "searchBar" 
            type="text" 
            placeholder = "Search"
            value = {this.state.search}
            onChange = {(e) => this.setState({search : e.target.value})}
          />
          
          <AddressBook
            addressbook = {this.state.addressBook}
            
          ></AddressBook>
          
          <br/>
          {/* display form for user to enter new contact information */}
          <Form onSubmit = {this.addContactHandler}> 
            <h2>Add New Contact Information</h2>
          <Form.Row>
            <Col>
              <Form.Control 
                type = "text" 
                placeholder="First Name" 
                value = {this.state.newFirstName}
                onChange = {(e) => this.setState({newFirstName : e.target.value})}
              />
            </Col>
            <Col>
              <Form.Control 
                type = "text" 
                placeholder = "Last Name"
                value = {this.state.newLastName}
                onChange = {(e) => this.setState({newLastName : e.target.value})}
              />
            </Col>
          </Form.Row>
          <br/>
          <Form.Row>
            <Col>
              <Form.Control 
                type = "date" 
                placeholder="Birthday" 
                value = {this.state.newBirthday}
                onChange = {(e) => this.setState({newBirthday : e.target.value})}
              />
            </Col>
            <Col>
              <Form.Control 
                type = "tel" 
                placeholder = "Telephone"
                value = {this.state.newTelephone}
                onChange = {(e) => this.setState({newTelephone : e.target.value})}
              />
            </Col>
          </Form.Row> 
          <br/>  
          <Form.Row>
              <Col>
              <Button variant = "primary" type = "submit" onClick = {this.formChecker}>
              <Emoji text=":package: Add New Contact" />
              </Button>
              </Col>
             
          </Form.Row>       
        </Form>
        </Container>
      </div>
    );
  }
}

export default App;
