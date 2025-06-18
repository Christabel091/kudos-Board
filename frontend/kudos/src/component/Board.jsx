import { Link } from "react-router-dom";
import { BoardsContext } from "../App";
import { useContext } from "react";
const Board = ({ board }) => {
  const BoardsObj = useContext(BoardsContext);
  let deleteBoard = async () => {
    const newBoard = BoardsObj.boards.filter((curr) => curr.id !== board.id);
    BoardsObj.setBoards(newBoard);
    try {
      const response = await fetch(`http://localhost:3000/boards/${board.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        console.log("failed to delete from database");
      }
    } catch (error) {}
  };
  return (
    <div className="board">
      <div className="board-content">
        <h1>{board.Name}</h1>
        <img src={board.image} />
        <p>{board.author}</p>
        <Link to={`/board/${board.id}`}> View details</Link>
        <button onClick={deleteBoard}>delete board</button>
      </div>
    </div>
  );
};

export default Board;
