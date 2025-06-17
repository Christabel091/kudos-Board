import { useState, useEffect } from "react";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Boards from "./data/data";
import Nav from "./component/Nav";
import { createContext } from "react";
export const BoardsContext = createContext(null);
import "./App.css";
function App() {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    setBoards(Boards);
  }, []);
  return (
    <>
      <BoardsContext.Provider value={{ boards, setBoards }}>
        <Header />
        <Nav />
        <Body />
        <Footer />
      </BoardsContext.Provider>
    </>
  );
}

export default App;
