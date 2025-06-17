import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BoardsContext } from "../App";
let BoardDetail = () => {
  const BoardsObj = useContext(BoardsContext);
  const { id } = useParams();
  const [board] = BoardsObj.boards.filter((board) => board.id === Number(id));

  return (
    <div>
      <h1>{board.title}</h1>
      <button> Create a card</button>
      <h1>Board in question {id}</h1>
    </div>
  );
};
export default BoardDetail;
