import { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Nav from "./component/Nav";
import BoardDetail from "./component/BoardDetail";
import "./App.css";

// Create context for boards
export const BoardsContext = createContext(null);
function App() {
  const [boards, setBoards] = useState([]);
  const [firstTime, setFirstTime] = useState(false);
  const [originalBoards, setOriginalBoards] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  // Initialize boards from static data (or fetch later)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/boards`
        );
        const Boards = await response.json();
        setBoards(Boards);
        setOriginalBoards(Boards);

      } catch (error) {
        console.log("an error occoured");
      }
      console.log(boards);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log({boards});
  }, [boards])

  const handleBoardFilter = (filter) => {
    let updated;
    console.log(originalBoards);
    switch (filter) {
      case "all":
        updated = originalBoards;
        break;
      case "Recent":
        updated = originalBoards.slice(1).slice(-3);
        break;
      case "celeb":
        updated = originalBoards.filter((b) => b.category === "celeb");
        break;
      case "Thanks":
        updated = originalBoards.filter((b) => b.category === "thanks");
        break;
      case "inspo":
        updated = originalBoards.filter((b) => b.category === "inspiration");
        break;
      default:
        updated = originalBoards;
    }
    setBoards(updated);
  };

  return (
    // Provide boards context around entire Router
    <BoardsContext.Provider value={{ boards, setBoards, originalBoards }}>
      <Router>
        <Routes>
          <Route
            index
            element={
              <>
                <Header />
                <Nav handleBoardFilter={handleBoardFilter} />

              {originalBoards.length === 0  ? <h1>WELCOME  </h1> : <Body />}
                <Footer />
              </>
            }
          />
          <Route path="board/:id" element={<BoardDetail />} />
        </Routes>
      </Router>
    </BoardsContext.Provider>
  );
}

export default App;
