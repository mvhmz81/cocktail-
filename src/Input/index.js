const card = () => {
  return (
    <div>
      <Card
        Key={drinks.idDrink}
        image={drinks.strDrinkThumb}
        header={drinks.strDrink}
      />
    </div>
  );
};

export default card;
