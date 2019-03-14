import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const addressBook = (props) => {
    
    return(
        <ListGroup.Item key={props.key}>
        <Card className="bg-light border rounded">
          <span key={props.key}
            className="text-right">
            {/* onClick={props.closer.bind(null,item.key)*/}
        
        {'\u274e'}           
        </span>
            <Card.Body className="text-left">
              <h5 >{props.lastName}'s Information</h5>
              <p>Last Name: {props.lastName}</p>
              <p>First Name: {props.firstName}</p>
              <p>Birthday: {props.birthday}</p>
              <p>Telephone: {props.telephone}</p>
            </Card.Body>
          </Card>
      </ListGroup.Item>
        
    )
};

export default addressBook;