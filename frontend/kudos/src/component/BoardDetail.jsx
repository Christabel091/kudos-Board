import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BoardsContext } from "../App";
import { useEffect } from "react";
import { useState } from "react";
import CardForm from "./CardForm";
import Card from "./Card";
const BoardDetail = () => {
  const [cards, setCards] = useState([]);
  const [canSeeFormCard, setCanSeeFormCard] = useState(false);
  const BoardsObj = useContext(BoardsContext);
  const { id } = useParams();
  const [board] = BoardsObj.boards.filter((board) => board.id === Number(id));
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/boards/cards/${id}`
          // `https://kudos-board-9gir.onrender.com/boards/cards/${id}`
        );
        const fetchedCards = await response.json();
        setCards(fetchedCards);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCards();
  }, []);
  const createCard = () => {
    setCanSeeFormCard(true);
  };

  return (
    <div>
      <h1>{board.Name}</h1>
      <button onClick={createCard}> Create a card</button>
      {canSeeFormCard && (
        <CardForm
          setCanSeeFormCard={setCanSeeFormCard}
          id={id}
          cards={cards}
          setCards={setCards}
        />
      )}
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};
export default BoardDetail;
