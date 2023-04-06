const Card = ({ key, image, header }) => {
  console.log();
  return (
    <div>
      <img src={image} height="100px" width="100px" />
      <h2>{header}</h2>
    </div>
  );
};

export default Card;
