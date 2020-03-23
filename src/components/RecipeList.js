import React, { useState, useEffect } from 'react';
import RecipeSearch from './RecipeSearch.js';
import RecipeItem from './RecipeItem.js';

const API = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/";

export default function RecipeList() {
    const [state, setState] = useState([]);
    const [filterState, setFilterState] = useState([]);

    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => {
            setState(data.results);
            setFilterState(data.results);
        })
        .catch(error => console.log(error))
    }, []);

    const filterRecipes=function(event,searchstate){
        event.preventDefault();
        const searchText = searchstate.text.toLowerCase();

        const filterArray = state.filter(recipe => {

            const recipeName = recipe.title.toLowerCase();

            if(recipeName.includes(searchText)){
                return true;
            }

            return false;
        });

        setFilterState(filterArray);
    }

    return (
        <div>
            <RecipeSearch handleSearch={filterRecipes} />
            <ul>
                {
                    filterState.map (
                        (recipe, index) => <li key={index}><RecipeItem title={recipe.title}
                        thumbnail={recipe.thumbnail} /></li>
                    )
                }
            </ul>
        </div>
    );
}
