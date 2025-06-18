import { useState } from "react";
import { useContext } from "react";
import { BoardsContext } from "../App";
const Search = () => {
  const [searchFor, setSearchFor] = useState("");
  const BoardsObj = useContext(BoardsContext);
  let displaySearch = () => {
    const searched = BoardsObj.boards.filter((board) =>
      board.Name.toLowerCase().includes(searchFor.toLowerCase())
    );
    BoardsObj.setBoards(searched);
  };
  let searchForByInput = (e) => {
    let val = e.target.value;
    console.log(val);
    setSearchFor(val);
    if (val.trim() === "") {
      BoardsObj.setBoards(BoardsObj.originalBoards);
      setSearchFor("");
    } else {
      displaySearch();
    }
  };
  return (
    <div className="search-container">
      <input type="text" value={searchFor} onChange={searchForByInput} />
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
