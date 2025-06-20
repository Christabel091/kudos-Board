import { useEffect, useState } from "react";

const Card = ({ card, cards, setCards, count, setCount}) => {
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
  useEffect(() => {
    const formData = {
      upVote: count
    };
    const updateUpvotes = async (card) => {
      try {
        const response = await fetch(
          `http://localhost:3000/boards/cards/${card.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        if (!response.ok) {
          console.log("failed to update from database");
        }

        const result = await response.json();
        setCount(result.upVote);
      } catch (error) {}
    }
    updateUpvotes();
  }, [count])

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
            {"upvote: " + card.upVote}
          </button>
          <button onClick={deleteCard}>delete card</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
