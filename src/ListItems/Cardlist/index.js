import Card from "../Cardlist/Card/index";
const Cardlist = ({ getCocktailData }) => {
  console.log(getCocktailData);
  const drinks = getCocktailData.drinks ? getCocktailData.drinks : [];
  console.log(drinks);

  return (
    <div>
      {drinks.map((cocktail) => {
        console.log(cocktail.strDrinkThumb);
        return (
          <Card
            Key={cocktail.idDrink}
            image={cocktail.strDrinkThumb}
            header={cocktail.strDrink}
            recipe={cocktail.strInstructions}
          />
        );
      })}
    </div>
  );
};
export default Cardlist;
