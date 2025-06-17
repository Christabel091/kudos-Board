import { Link } from "react-router-dom";
import { BoardsContext } from "../App";
import { useContext } from "react";
const Board = ({ board }) => {
  const BoardsObj = useContext(BoardsContext);
  let deleteBoard = () => {
    const newBoard = BoardsObj.boards.filter((curr) => curr.id !== board.id);
    BoardsObj.setBoards(newBoard);
    // -----Todo----
    //  Delete from Database
  };
  return (
    <div className="board">
      <div className="board-content">
        <h1>{board.title}</h1>
        <img src={board.imageUrl} />
        <p>{board.description}</p>
        <Link to={`/board/${board.id}`}> View details</Link>
        <button onClick={deleteBoard}>delete board</button>
      </div>
    </div>
  );
};

export default Board;
