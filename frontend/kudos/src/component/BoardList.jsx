import Board from "./Board";
import { useContext } from "react";
import { BoardsContext } from "../App";
const BoardList = () => {
  const BoardsObj = useContext(BoardsContext);

  return (
    <div>
      {console.log("boardlist rendered")}
      {BoardsObj.boards.map((board) => (
        <Board
          key={board.id}
          id={board.id}
          title={board.title}
          url={board.imageUrl}
          description={board.description}
        />
      ))}
    </div>
  );
};

export default BoardList;
