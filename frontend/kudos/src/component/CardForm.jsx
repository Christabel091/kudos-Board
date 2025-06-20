import { useState } from "react";
import GifSearch from "./GifSearch";
const CardForm = (props) => {
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  const [cardAuthor, setCardAuthor] = useState("");
  const [error, setError] = useState("");

  const displayCard = async (e) => {
    e.preventDefault();
    const formData = {
      BoardId: props.id,
      title: cardTitle,
      description: cardDescription,
      gifUrl: props.selectedGif,
      upVote: props.count,
      author: cardAuthor,
    };
    const isEmptyField = Object.values(formData).some(
      (val) => typeof val === 'string' && val.trim() === ""
    );
    if (isEmptyField) {
      setError("Please fill in all the fields");
      return;
    }
    setError("");
    props.setCanSeeFormCard(false);
    try {
      const response = await fetch(
        `http://localhost:3000/boards/cards/${props.id}`,

        // `https://kudos-board-9gir.onrender.com/boards/cards/${props.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      props.setCards([...props.cards, result]);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="form-overlay">
      <div className="form">
        <button className="x" onClick={() => props.setCanSeeFormCard(false)}>
          X
        </button>
        <h1>Creaate a playlist</h1>

        <input
          type="text"
          placeholder="Enter card title"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter card desctiption"
          value={cardDescription}
          onChange={(e) => setCardDescription(e.target.value)}
        />
        <GifSearch
          selectedGif={props.selectedGif}
          setSelectedGif={props.setSelectedGif}
        />
        <input
          type="text"
          placeholder="Enter card author"
          value={cardAuthor}
          onChange={(e) => setCardAuthor(e.target.value)}
        />
        <p>{error}</p>
        <button onClick={displayCard}>Create card</button>
      </div>
    </div>
  );
};

export default CardForm;
