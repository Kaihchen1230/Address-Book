import React, { Component } from 'react';
import {generate} from 'randomstring';
import AddressBook  from './AddressBook/AddressBook';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    showAddressBook : false,

    
  };

  troggleAddressboook = () => {
    const doesShow = this.state.showAddressBook;
    this.setState({
      showAddressBook : !doesShow
    })
  }

  render() {

    let address_book = null;
    if(this.state.showAddressBook){
      address_book = (
        <Container>
          {
            this.state.addressBook.map((element,index) => {
              return <AddressBook
                        firstName = {element.FirstName}
                        lastName = {element.LastName}
                        birthday = {element.Birthday}
                        telephone = {element.Telephone}
                        key = {element.id}>
                      </AddressBook>
            })
          }
        </Container>
      );
    }

    return (
      <div className="App">
        <Container>
          <h1>React Addressbook</h1>
          <Button variant = "primary" onClick = {this.troggleAddressboook}>
            {!this.state.showAddressBook ? 'Show Addressbook' : 'Hide Addressbook'}
          </Button>
          {address_book}

          
        </Container>
        
        <Form>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your first name" />
        </Form.Group>
        </Form>
      </div>
    );
  }
}

export default App;
