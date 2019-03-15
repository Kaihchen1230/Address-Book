import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Emoji from 'react-emoji-render';
import './AddressBook.css';

const addressBook = (props) => {

    const containerStyle = {
        margin : '10px auto',
        width : '60%'
        
    }
    
    let addressbook = [...props.addressbook];
    let listContacts = addressbook.map((item) => 
        <Container key = {item.id} style = {containerStyle}>
            <Card className="bg-light border rounded">
                <Card.Body className="text-left">
                    <h3 >{item.LastName}'s Information</h3>
                    <p>Last Name: {item.LastName}</p>
                    <p>First Name: {item.FirstName}</p>
                    <p>Birthday: {item.Birthday}</p>
                    <p>Telephone: {item.Telephone}</p>
                    <p>ID: {item.id}</p>
                </Card.Body>
                
                <button><Emoji text="🗑 Delete" /></button>
                
            </Card>
        </Container>
    );

    return listContacts;
        
};

export default addressBook;