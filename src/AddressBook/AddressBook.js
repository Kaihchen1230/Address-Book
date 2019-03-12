import React from 'react';

const addressBook = (props) => {

    return(
        <div>
            <p>the firstNname is {props.firstName}</p>
            <p>the lastName is {props.lastName}</p>
            <p>the birthday is {props.birthday}</p>
            <p>the telephone is {props.telephone}</p>
        </div>
        
    )
};

export default addressBook;