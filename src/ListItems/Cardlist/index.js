import Card from "../Cardlist/Card/index";
const Cardlist = ({ getCocktailData }) => {
  console.log(getCocktailData);
  const drinks = getCocktailData.drinks ? getCocktailData.drinks : [];
  console.log(drinks);

  return (
    <div>
      {drinks.map((cocktail) => {
        console.log('indeg: ', cocktail);
        const ingredients = Object.entries(cocktail).filter(entries => {
          const [key, value] = entries
          if (key.includes('strIngredient')) return value
          
        }).map(ingredients => {
          const [key, value] = ingredients

          return value})

        console.log(ingredients)

        return (
          <Card
            Key={cocktail.idDrink}
            image={cocktail.strDrinkThumb}
            header={cocktail.strDrink}
            items={ingredients} //how to get multiple strIngredient1
            measures={cocktail.strMeasure1} //how to get multiple strMeasure1
            recipe={cocktail.strInstructions}
          />
        );
      })}
    </div>
  );
};
export default Cardlist;
