import { useState } from "react";
import { useContext } from "react";
import { BoardsContext } from "../App";
const Search = () => {
  const [searchFor, setSearchFor] = useState("");
  const BoardsObj = useContext(BoardsContext);
  let displaySearch = () => {
    const searched = BoardsObj.boards.filter((board) =>
      board.title.toLowerCase().includes(searchFor.toLowerCase())
    );
    BoardsObj.setBoards(searched);
  };
  return (
    <div>
      <input
        type="text"
        value={searchFor}
        onChange={(event) => setSearchFor(event.target.value)}
      />
      <button onClick={displaySearch}>Search</button>
      <button
        onClick={() => {
          BoardsObj.setBoards(BoardsObj.originalBoards);
          setSearchFor("");
        }}
      >
        Clear
      </button>
    </div>
  );
};
export default Search;
