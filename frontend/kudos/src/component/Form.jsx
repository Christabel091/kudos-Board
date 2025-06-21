import { useState } from "react";
import { useContext } from "react";
import { BoardsContext } from "../App";
let Form = (props) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const BoardsObj = useContext(BoardsContext);
  const [newBoardName, setNewBoardName] = useState("");
  const [newBoardAuthor, setNewBoardAuthor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [error, setError] = useState("");
  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedCategory(value);
  };

  let createBoard = async (e) => {
    e.preventDefault();
    const formData = {
      Name: newBoardName,
      category: selectedCategory,
      author: newBoardAuthor,
    };
    const requiredData = {
      Name: newBoardName,
      category: selectedCategory,
    }
    const isEmptyField = Object.values(requiredData).some(
      (val) =>  val.trim() === ""
    );
    if (isEmptyField) {
      setError("Please fill in all the fields");
      return;
    }
    setError("");
    props.setCanShowForm(false);
    try {
      const response = await fetch(
        `${baseUrl}/boards/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      BoardsObj.setBoards([...BoardsObj.boards, result]);
      console.log("Server response:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="form-overlay">
      <form className="form">
        <button onClick={() => props.setCanShowForm(false)} className="x">X</button>
        <h1>Create a new playlist</h1>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter Board name"
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
        />
        <label>Category</label>
        <select value={selectedCategory} onChange={handleOptionChange}>
          <option value={""}>Select a categpru</option>
          <option value={"celeb"}>Celebration</option>
          <option value={"thanks"}>Thank you</option>
          <option value={"inspiration"}>Inspiration</option>
        </select>
        <label>Author</label>
        <input
          type="text"
          placeholder="Enter your name(optional)"
          value={newBoardAuthor}
          onChange={(e) => setNewBoardAuthor(e.target.value)}
        />
        {error}
        <button onClick={createBoard}>Create</button>
      </form>
    </div>
  );
};

export default Form;
