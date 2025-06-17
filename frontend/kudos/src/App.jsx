import { useState, useEffect } from "react";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Boards from "./data/data";
import Nav from "./component/Nav";
import { createContext } from "react";
import BoardDetail from "./component/BoardDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// eslint-disable-next-line react-refresh/only-export-components
export const BoardsContext = createContext(null);
import "./App.css";
function App() {
  const [boards, setBoards] = useState([]);
  const [originalBoards, setOriginalBoards] = useState([]);
  useEffect(() => {
    setBoards(Boards);
    setOriginalBoards(Boards);
  }, []);

  const handleBoardFilter = (filter) => {
    let updated;
    switch (filter) {
      case "all":
        updated = originalBoards;
        break;
      case "recent":
        updated = [...originalBoards].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        break;
      case "celeb":
        updated = originalBoards.filter((b) => b.category === "celebration");
        break;
      case "thanks":
        updated = originalBoards.filter((b) => b.category === "thank you");
        break;
      case "inspo":
        updated = originalBoards.filter((b) => b.tags.includes("innovation"));
        break;
      default:
        updated = originalBoards;
    }
    setBoards(updated);
  };

  return (
    <Router>
      <Routes>
        <Route
          index
          element={
            <BoardsContext.Provider
              value={{ boards, setBoards, originalBoards }}
            >
              <Header />
              <Nav handleBoardFilter={handleBoardFilter} />
              <Body />
              <Footer />
            </BoardsContext.Provider>
          }
        />
        <Route path="/board/:id" element={<BoardDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
