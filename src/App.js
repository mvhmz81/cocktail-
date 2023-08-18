import { useEffect, useState } from "react";
import "./App.css";
// import Input from "./Input";
import CocktailName from "./Input/CocktailName";
import Ingriedients from "./Input/Ingriedients";
// import ListItems from "./ListItems";
import Cardlist from "./ListItems/Cardlist/cardlistIndex";
// import Card from "./ListItems/Cardlist/Card";
import "../src/cocktailPic.jpg";

let URL = "http://www.thecocktaildb.com/api/json/v1/1/";
function App() {
  const [cocktailData, setCocktailData] = useState([]);
  const [ingredientSearch, setIngredientSearch] = useState(false);

  async function getCocktail(name) {
    const response = await fetch(URL + "search.php?s=" + name);
    let data = await response.json();
    console.log(data);
    setCocktailData(data);
    setIngredientSearch(false);
  }
  useEffect(() => {
    getCocktail();
  }, []);

  async function getByIngriedients(alcohol) {
    const response = await fetch(URL + "filter.php?i=" + alcohol);
    let data = await response.json();
    setIngredientSearch(true);
    console.log(data);
    setCocktailData(data);
  }

  return (
    <div className="App">
      <h1>Cocktail Nights Surprise</h1>
      <img
        className="CocktailPic"
        src={require("../src/cocktailPic.jpg").default}
        alt="cocktails"
      />

      {/* <Input /> */}
      <CocktailName handleGetCocktail={getCocktail} />
      <Ingriedients handleGetByIngriedient={getByIngriedients} />
      {/* <ListItems /> */}
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
