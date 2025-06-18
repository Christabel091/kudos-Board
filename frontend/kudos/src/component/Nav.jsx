import { useState } from "react";
import Form from "./Form";
const Nav = (props) => {
  const [canShowForm, setCanShowForm] = useState(false);
  let CreatePlaylist = () => {
    setCanShowForm(true);
  };
  let handleFilter = (e) => {
    const val = e.target.value;
    props.handleBoardFilter(val);
  };
  return (
    <nav className="nav">
      <button value={"all"} onClick={handleFilter}>
        All
      </button>
      <button value={"Recent"} onClick={handleFilter}>
        Recent
      </button>
      <button value={"celeb"} onClick={handleFilter}>
        Celebration
      </button>
      <button value={"Thanks"} onClick={handleFilter}>
        Thank you
      </button>
      <button value={"inspo"} onClick={handleFilter}>
        Inspiration
      </button>
      <button onClick={CreatePlaylist}>Create a new board</button>
      {canShowForm && <Form setCanShowForm={setCanShowForm} />}
    </nav>
  );
};

export default Nav;
