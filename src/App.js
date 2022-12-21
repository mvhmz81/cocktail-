import { useEffect, useState } from "react";
import "./App.css";
// import Input from "./Input";
import CocktailName from "./Input/CocktailName";
import Ingriedients from "./Input/Ingriedients";
// import ListItems from "./ListItems";
import Cardlist from "./ListItems/Cardlist";
// import Card from "./ListItems/Cardlist/Card";

let URL = "http://www.thecocktaildb.com/api/json/v1/1/";
function App() {
  const [cocktailData, setCocktailData] = useState([]);
  useEffect(() => {
    async function getCocktail(name) {
      const response = await fetch(URL + "search.php?s=" + name);
      let data = await response.json();
      console.log(data);
      setCocktailData(data);
    }
    getCocktail();
  }, []);
  getCocktail();
  async function getByIngriedients(alcohol) {
    const response = await fetch(URL + "filter.php?i=" + alcohol);
    let data = await response.json();
    console.log(data);
    return data;
  }
  // getCocktail("margarita");
  return (
    <div className="App">
      {/* <Input /> */}
      <CocktailName handleGetCocktail={getCocktail} />
      <Ingriedients handleGetByIngriedient={getByIngriedients} />
      {/* <ListItems /> */}
      <Cardlist getCocktailData={cocktailData} />
    </div>
  );
}

export default App;
