const Card = ({
  image,
  header,
  items,
  recipe,
  onClick,
  setIngredientSearch,
  showButton,
  cocktail,
}) => {
  return (
    <div className="card-container">
      <div className="card">
        <div
          /*included if satement to adjust header fint sise based on length
           */
          className={`card-header ${header.length > 20 ? "adjustable" : ""}`}
        >
          {header}
        </div>
        <div className="insideCard">
          <img
            src={image}
            alt={header}
            className={`card-image ${recipe ? "with-recipe" : ""}`}
          />
          {/* adding a condition so that the inside card CSS are not seen when 
          searching for by ingredient*/}
          {recipe && (
            <ul className="card-items">
              {items.map((item, index) => (
                <li key={index.idDrink}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="recipe">
          <p className="card-recipe">{recipe}</p>
          {showButton && (
            <button
              className="getCocktailButton"
              onClick={() => onClick(cocktail.strDrink)}
            >
              Get Cocktail
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
