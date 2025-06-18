const Card = ({ card }) => {
  return (
    <div>
      {console.log("Card rendered 2")}
      <h2 style={{ color: "blue" }}>{card.title}</h2>
      <p>{card.description}</p>
      <span>upvote: 0</span>
      <button>delete card</button>
    </div>
  );
};

export default Card;
