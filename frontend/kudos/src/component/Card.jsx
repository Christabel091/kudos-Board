import { useEffect, useState } from "react";

const Card = ({ card, cards, setCards}) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const deleteCard = async () => {
    const newCards = cards.filter((thisCard) => thisCard.id != card.id);
    setCards(newCards);
    try {
      const response = await fetch(
        `${baseUrl}/boards/cards/${card.id}`,
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
      upVote: card.upVote,
    };
    const updateUpvotes = async (card) => {
      try {
        const response = await fetch(
          `${baseUrl}/boards/cards/${card.id}`,
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
  }, [card.upVote])

  return (

      <div className="card">
        <div className="card-content">
          <h2 style={{ color: "blue" }}>{card.title}</h2>
          <img src={card.gifUrl} alt="selectedGIf" />
          <p>{card.description}</p>
          <button
            onClick={() => {
              card.upVote = card.upVote + 1;
              setCards([...cards]);
            }}
          >
            {"upvote: " + card.upVote}
          </button>
          <button onClick={deleteCard}>delete card</button>
        </div>
      </div>
  );
};

export default Card;
