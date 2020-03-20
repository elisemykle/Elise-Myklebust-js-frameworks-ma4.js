import React from 'react';
import RecipeItem from 'RecipeItem.js'

fetch('https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/')
  .then((response) => {
    return response.json();
  })
  .then(app);


  function app(data) { // function that create the site(html).

    function createList(data) { // function that create the list of items.
        return `
            <ul>
                ${data.results.map(item => createItem(item))}
            </ul>
      `
    }

    function createItem(data) { // function that takes the items in the list at return it to the list.
        return `
            <li>
                <h1>${data.title}</h1>
                <img src="${data.thumbnail}" alt="${data.imageUrl} image" />
                <p>${data.ingredients}</p>
                <a href="${data.href}">Link to recipe</a>
            </li>
        `;
    }

      var htmlString = createList(data);
      document.body.innerHTML += htmlString;


  }
