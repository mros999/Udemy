import './Card.css';
import React from 'react';

export default function Card (props){
    const cardstyle ={
        backgroundColor:props.color || '#000',
        borderColor: props.color || '#000',
    }
    return(
        <div className="Card" style={cardstyle
       
        /*{Pode ser usado desse modo!
        backgroundColor:props.color || '#000',
        borderColor: props.color || '#000',
        }*/
        
        }>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
            
            
        </div>

    );


};