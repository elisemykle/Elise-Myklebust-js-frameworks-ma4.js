import React from 'react';

export default function RecipeItem(props) {
    return (
        <div>
            <img src={props.thumbnail} alt={props.title}/>
            <h1>{props.title}</h1>
        </div>
    );
}
