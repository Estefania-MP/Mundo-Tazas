import React from 'react';



export const ItemListContainer = (props) => {
    console.log(props)
    return (
        <>
        <h1 className='title'> Bienvenidos a {props.name}</h1>
       </>
)
} 