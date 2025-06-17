import { useState } from "react";
import Form from "./Form";
const Nav = (props) => {
  const [canShowForm, setCanShowForm] = useState(false);
  let CreatePlaylist = () => {
    setCanShowForm(true);
  };
  let handleBoardFilter = (e) => {
    const val = e.target.value;
    props.handleBoardFilter(val);
  };
  return (
    <nav className="nav">
      <button value={"all"} onClick={handleBoardFilter}>
        All
      </button>
      <button value={"Recent"} onClick={handleBoardFilter}>
        Recent
      </button>
      <button value={"celeb"} onClick={handleBoardFilter}>
        Celebration
      </button>
      <button value={"Thanks"} onClick={handleBoardFilter}>
        Thank you
      </button>
      <button value={"inspo"} onClick={handleBoardFilter}>
        Inspiration
      </button>
      <button onClick={CreatePlaylist}>Create a new board</button>
      {canShowForm && <Form setCanShowForm={setCanShowForm} />}
    </nav>
  );
};

export default Nav;
