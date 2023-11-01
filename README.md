# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

one of my first projects which i have been working with to develop my skills. This project utilises the cocktail API found at https://www.thecocktaildb.com/api.php.
I built my app to build on my css and react skills. The API allows you to use C RUD functions to search for the coctails in the database. You could search by name and this was my first MVP.
i utilised react to set state once a search had occurred to bring forward associated searches. Then using POSTMAN i was able to decipher through the JSON data and map throught the desired info mainly image, ingvriedients and recipe.
I ran into issues with the ingriedients and deciphered a way to tske an object and extract and process the ingriedients. I used Object.entries(cocktail) to create key value pairs sand create an array using the reduce method.  
This allowed me to filters out ingredients with missing or null values and constructs strings like "measure ingredient" for each ingredient in the cocktail. The resulting array contains all the processed ingredients which i could then display.
I then repeated this understandingf gto create anothe rsearch function based on ingriedients allowing the visualisation of all cocktails with a set alcohol or fruit.
Ran into many issues with CSS and learning how componenents pass props.

The project is a visual map of my progress and although not the finished product the MVP was to be able to search for cocktails and bring back cards.

The second MVP was to add the ingredient search

The third was to link an ingriedient search to pull the selected cocktail

Final chage was to CSS design to bring it forward in terms of looks

there is still more that can be done but to allow for more learning i will move on

the vite and bootstrap is not working
i think the system is corrupted and so i need to delete all
