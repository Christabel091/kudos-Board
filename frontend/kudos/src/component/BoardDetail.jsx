import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BoardsContext } from "../App";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
const BoardDetail = () => {
  const [cards, setCards] = useState([]);
  const BoardsObj = useContext(BoardsContext);
  const { id } = useParams();
  const [board] = BoardsObj.boards.filter((board) => board.id === Number(id));
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/boards/cards/${id}`
        );
        const fetchedCards = await response.json();
        setCards(fetchedCards);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCards();
  }, [id]);

  return (
    <div>
      <h1>{board.Name}</h1>
      <button> Create a card</button>
      {cards.map((card) => {
        {
          <Card card={card} />;
        }
      })}
    </div>
  );
};
export default BoardDetail;
