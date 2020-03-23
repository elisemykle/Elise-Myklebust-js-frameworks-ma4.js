import React, {useState} from 'react';

export default function RecipeSearch({handleSearch}) {
    const [state, setState] = useState({ text: "" });

    function handleChange(event){
        setState({ text: event.target.value});
    }

    return (
        <div>
            <form onSubmit={event => handleSearch(event, state)}>
                <input type="text" placeholder="Recipe name.." onChange={event => {
                        handleChange(event);
                        handleSearch(event, state);
                    }
                } />
            <input type="submit" value="search" />
            </form>
        </div>
    );
}
