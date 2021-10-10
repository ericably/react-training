import React from 'react';

//function Client(details, onDelete) {
//    return (
//        <li>
//            {details.nom}{" "}<button onClick={() =>onDelete(details.id)}>x</button>
//        </li>
//    )
//}

const Client = ({details, onDelete}) => (
    <li>
        {details.nom} <button onClick={() =>onDelete(details.id)}>x</button>
    </li>
)

export default Client;