import { useState } from "react";

const Card = ({ card, cards, setCards }) => {
  const [count, setCount] = useState(0);
  const deleteCard = async () => {
    const newCards = cards.filter((thisCard) => thisCard.id != card.id);
    setCards(newCards);
    try {
      const response = await fetch(
        `http://localhost:3000/boards/cards/${card.id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        console.log("failed to delete from database");
      }
    } catch (error) {}
  };
  return (
    <div className="card-list">
      <div className="card">
        <div className="card-content">
          <h2 style={{ color: "blue" }}>{card.title}</h2>
          <img src={card.gifUrl} alt="selectedGIf" />
          <p>{card.description}</p>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            {"upvote: " + count}
          </button>
          <button onClick={deleteCard}>delete card</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
