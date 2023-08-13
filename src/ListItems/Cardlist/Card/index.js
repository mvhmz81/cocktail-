const Card = ({ key, image, header, recipe, items, measures }) => {
  console.log();
  return (
    <div>
      <img src={image} height="100px" width="100px" />
      <h2>{header}</h2>
      <h3>{recipe}</h3>
      {items.map(ingredient => <h3>{ingredient}</h3>)}
      <h3>{measures}</h3>
    </div>
  );
};

export default Card;
