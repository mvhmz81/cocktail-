import "./App.css";
import Input from "./Input";
import CocktailName from "./Input/CocktailName";
import Ingriedients from "./Input/Ingriedients";
// import ListItems from "./ListItems";
import Cardlist from "./ListItems/Cardlist";
import Card from "./ListItems/Cardlist/Card";
function App() {
  return (
    <div className="App">
      <Input />
      <CocktailName />
      <Ingriedients />
      {/* <ListItems /> */}
      <Cardlist />
      <Card />
    </div>
  );
}

export default App;
