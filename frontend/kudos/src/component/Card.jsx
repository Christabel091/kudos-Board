const Card = ({ card }) => {
  return (
    <div className="card-list">
      <div className="card">
        <div className="card-content">
          <h2 style={{ color: "blue" }}>{card.title}</h2>
          <p>{card.description}</p>
          <span>upvote: 0</span>
          <button>delete card</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
