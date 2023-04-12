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
            items={cocktail.strIngredient1} //how to get multiple strIngredient1
            measures={cocktail.strMeasure1} //how to get multiple strMeasure1
            recipe={cocktail.strInstructions}
          />
        );
      })}
    </div>
  );
};
export default Cardlist;
