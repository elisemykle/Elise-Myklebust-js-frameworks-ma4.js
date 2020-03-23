import React, { useState, useEffect } from 'react';
import RecipeSearch from './RecipeSearch.js';
import RecipeItem from './RecipeItem.js';

const API = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/";

export default function RecipeList() {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => {
            setState(data.results)
        })
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <RecipeSearch />
            <ul>
                {
                    state.map (
                        (recipe, index) => <li key={index}><RecipeItem title={recipe.title}
                        thumbnail={recipe.thumbnail} /></li>
                    )
                }
            </ul>
        </div>
    );
}
