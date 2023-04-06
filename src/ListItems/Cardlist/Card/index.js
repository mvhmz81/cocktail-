const Card = ({ key, image, header, recipe, items }) => {
  console.log();
  return (
    <div>
      <img src={image} height="100px" width="100px" />
      <h2>{header}</h2>
      <h3>{recipe}</h3>
      <h3>{items}</h3>
    </div>
  );
};

export default Card;
