import React, { Component } from 'react';
import AddressBook  from './AddressBook/AddressBook';
import { Container} from 'reactstrap';

import './App.css';

class App extends Component {

  state = {
    addressBook: [
      {
        FirstName : 'Cathy',
        LastName : 'Pierce',
        Birthday : '9/14/1996',
        Telephone : '200-910-8132'
      },
      {
        FirstName: 'Alfonso',
        LastName: 'Cooley',
        Birthday: '8/10/1973',
        Telephone: '200-657-9362'
      },
      {
        FirstName: 'Victor',
        LastName: 'Gordon',
        Birthday: '8/3/1970',
        Telephone: '200-661-9407'
      },
      {
        FirstName: 'Colleen',
        LastName: 'Wright',
        Birthday: '10/28/1967',
        Telephone: '200-250-7949'
      },
      {
        FirstName: 'James',
        LastName: 'Johnston',
        Birthday: '5/11/1972',
        Telephone: '200-645-3176'
      },
      {
        FirstName: 'Anna',
        LastName: 'Reyes',
        Birthday: '9/10/1975',
        Telephone: '200-707-8670'
      }
    ],
    showAddressBook : false
  };

  render() {
    return (
      <div className="App">
        <Container>
          <h1>React Address Book</h1>
        <AddressBook></AddressBook> 
        </Container>
        
      </div>
    );
  }
}

export default App;
