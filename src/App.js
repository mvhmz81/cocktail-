import { useEffect, useState } from "react";
import "./App.css";
/*import "./movingCocktail.css";*/
// import Input from "./Input";
import CocktailName from "./Input/CocktailName";
import Ingriedients from "./Input/Ingriedients";
// import ListItems from "./ListItems";
import Cardlist from "./ListItems/Cardlist/cardlistIndex";
// import Card from "./ListItems/Cardlist/Card";
//import cocktailPic from "../src/cocktailPic.jpg";

let URL = "http://www.thecocktaildb.com/api/json/v1/1/";

function App() {
  const [cocktailData, setCocktailData] = useState([]);
  const [ingredientSearch, setIngredientSearch] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the default URL for random cocktails
    const defaultURL = URL + "random.php";

    async function getRandomCocktail() {
      try {
        const response = await fetch(defaultURL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        /* console.log(data); */
        setCocktailData(data);
        setIngredientSearch(false);
        setError(null); // Clear any previous error
      } catch (error) {
        console.error("An error occurred:", error);
        setError("An error occurred while fetching data.");
      }
    }

    // Call getRandomCocktail when loads
    getRandomCocktail();
  }, []);

  async function getCocktail(name) {
    try {
      const response = await fetch(URL + "search.php?s=" + name);
      if (!response.ok) {
        throw new Error("Choose an option");
      }
      const data = await response.json();
      if (data.drinks === null) {
        throw new Error("No results found.");
      }
      /*console.log(data);*/
      setCocktailData(data);
      setIngredientSearch(false);
      setError(null);
    } catch (error) {
      alert("An error occurred this cocktail does not exist:", error);
      setError(/*"An error occurred while fetching data."*/ error.message);
    }
  }

  async function getByIngriedients(alcohol) {
    try {
      const response = await fetch(URL + "filter.php?i=" + alcohol);
      if (!response.ok) {
        throw new Error("Choose an Ingriedient");
      }
      const data = await response.json();
      if (data.ingriedients === null) {
        throw new Error("No results found.");
      }
      setIngredientSearch(true);
      /*console.log(data);*/
      setCocktailData(data);
      setError(null);
    } catch (error) {
      alert(
        "An error occurred no cocktails exist with that ingriedient:",
        error
      );
      setError("An error occurred while fetching data.");
    }
  }

  return (
    <div className="App">
      <div className="header-container">
        <div className="title">
          <h1>MixologyHub: </h1>
          <h2>Cocktail Recipes & Ingredients</h2>
        </div>
      </div>
      {/*<div className="animation-container">
        <div className="cocktail-party">
          <div className="green-drink">
            <div className="juice"></div>
          </div>
          <div className="martini">
            <div className="glass"></div>
            <div className="olives"></div>
          </div>
          <div className="whiskey"></div>
        </div>
      </div>*/}
      <div className="input">
        {/* <Input /> */}
        <CocktailName handleGetCocktail={getCocktail} />
        <Ingriedients handleGetByIngriedient={getByIngriedients} />
        {/*<img className="cocktailPic" src={cocktailPic} alt="cocktails" />*/}
        {/* <ListItems /> */}
      </div>
      <Cardlist
        getCocktailData={cocktailData}
        handleGetCocktail={getCocktail}
        cocktailSearch={getByIngriedients}
        ingredientSearch={ingredientSearch}
      />
    </div>
  );
}
export default App;

//create functionality so when search by ingredient you can click card and gives you drink details
