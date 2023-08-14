// const Card = ({ key, image, header, recipe, items, measures }) => {
//   console.log();
//   return (
//     <div>
//       <img src={image} height="100px" width="100px" />
//       <h2>{header}</h2>
//       <h3>{recipe}</h3>
//       {items.map(ingredient => <h3>{ingredient}</h3>)}
//       <h3>{measures}</h3>
//     </div>
//   );
// };
const Card = ({ image, header, items, recipe }) => {
  return (
    <div className="card">
      <h2 className="card-header">{header}</h2>
      <img src={image} alt={header} className="card-image" />
      <ul className="card-items">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="card-recipe">{recipe}</p>
    </div>
  );
};

export default Card;
