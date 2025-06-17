import Board from "./Board";
import { useContext } from "react";
import { BoardsContext } from "../App";
const BoardList = () => {
  const BoardsObj = useContext(BoardsContext);

  return (
    <div className="board-list">
      {console.log("boardlist rendered")}
      {BoardsObj.boards.map((board) => (
        <Board board={board} />
      ))}
    </div>
  );
};

export default BoardList;
