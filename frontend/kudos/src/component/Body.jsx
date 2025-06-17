import { use, useEffect, useState } from "react";
import Board from "./Board";
import { useContext } from "react";
import { BoardsContext } from "../App";
const Body = () => {
  const BoardsObj = useContext(BoardsContext);
  return (
    <main>
      {BoardsObj.boards.map((board) => (
        <Board
          key={board.id}
          id={board.id}
          title={board.title}
          url={board.imageUrl}
          description={board.description}
        />
      ))}
    </main>
  );
};

export default Body;
