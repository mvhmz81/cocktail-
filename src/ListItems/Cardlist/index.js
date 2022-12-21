import Card from "../Cardlist/Card/index";
const Cardlist = ({ getCocktailData }) => {
  const drinks = getCocktailData.drinks;
  console.log(getCocktailData);
  return (
    <div>
      {drinks.map((cocktail) => {
        return (
          <Card
            Key={cocktail.idDrink}
            image={cocktail.strDrinkThumb}
            header={cocktail.strDrink}
          />
        );
      })}
    </div>
  );
};
export default Cardlist;
