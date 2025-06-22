import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { BoardsContext } from "../App";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CardForm from "./CardForm";
import Card from "./Card";
const BoardDetail = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [selectedGif, setSelectedGif] = useState("");
  const [canSeeFormCard, setCanSeeFormCard] = useState(false);
  const BoardsObj = useContext(BoardsContext);
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const [board] = BoardsObj.boards.filter((board) => board.id === Number(id));
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/boards/cards/${id}`

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
    <div className="board-detail">
      <button onClick={() => navigate("/")} className="x">X</button>
      <h1>{board.Name}</h1>
      <button onClick={createCard} className="create"> Create a card</button>
      {canSeeFormCard && (
        <CardForm
          setCanSeeFormCard={setCanSeeFormCard}
          id={id}
          cards={cards}
          setCards={setCards}
          selectedGif={selectedGif}
          setSelectedGif={setSelectedGif}
        />
      )}
      {cards.map((card) => {
        return (
          <Card
          key={card.id}
          card={card}
          cards={cards}
          setCards={setCards}

          />

        );
      })}
    </div>
  );
};
export default BoardDetail;
