import { useState } from "react";
let Form = (props) => {
  const [newBoardName, setNewBoardName] = useState("");
  const [newBoardAuthor, setNewBoardAuthor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedCategory(value);
  };

  let createBoard = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    props.setCanShowForm(false);
    const formData = {
      name: newBoardName,
      category: selectedCategory,
      author: newBoardAuthor,
    };
    try {
      const response = await fetch("http://localhost:5000/api/board", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Server response:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="form-overlay">
      <form className="form">
        <button>X</button>
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
          <option value={"ins[iration"}>Inspiration</option>
        </select>

        <lable>Author</lable>
        <input
          type="text"
          placeholder="Enter Board name"
          value={newBoardAuthor}
          onChange={(e) => setNewBoardAuthor(e.target.value)}
        />

        <button onClick={createBoard}>Create</button>
      </form>
    </div>
  );
};

export default Form;
