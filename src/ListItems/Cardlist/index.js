import Card from "../Cardlist/Card/index";
const Cardlist = ({ getCocktailData }) => {
  console.log(getCocktailData);
  const drinks = getCocktailData.drinks ? getCocktailData.drinks : [];
  console.log(drinks);

  return (
    <div>
      {drinks.map((cocktail) => {
        //       console.log("indeg: ", cocktail);
        const ingredients = Object.entries(cocktail).reduce(
          (acc, [key, value]) => {
            if (key.includes("strIngredient") && value) {
              const measureKey = key.replace("strIngredient", "strMeasure");
              const measure = cocktail[measureKey];
              //acc.push(`${measure} ${value}`); //if value null looks bad so add ternary that if measure falsy return statement
              const ingredientWithMeasure = measure
                ? `${measure} ${value}`
                : `${value} to taste`;
              acc.push(ingredientWithMeasure);
            }
            return acc;
          },
          []
        );

        return (
          <Card
            Key={cocktail.idDrink}
            image={cocktail.strDrinkThumb}
            header={cocktail.strDrink}
            items={ingredients} //how to get multiple strIngredient1
            //           measures={cocktail.strMeasure1} //how to get multiple strMeasure1
            recipe={cocktail.strInstructions}
          />
        );
      })}
    </div>
  );
};
export default Cardlist;
