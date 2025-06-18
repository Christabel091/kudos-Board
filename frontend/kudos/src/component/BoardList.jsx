import Board from "./Board";
import { useContext } from "react";
import { BoardsContext } from "../App";
const BoardList = () => {
  const BoardsObj = useContext(BoardsContext);

  return (
    <div className="board-list">
      {BoardsObj.boards.map((board) => (
        <Board key={board.id} board={board} />
      ))}
    </div>
  );
};

export default BoardList;
