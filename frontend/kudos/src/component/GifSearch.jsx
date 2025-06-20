import { useState } from "react";
const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

const GifSearch = ({ selectedGif, setSelectedGif }) => {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=6`
    );
    const data = await response.json();
    setGifs(data.data); // this contains the GIFs
  };

  const handleGifClick = (url) => {
    setSelectedGif(url); // copy the URL to the input
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* Search Input */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for GIF"
      />
      <button onClick={handleSearch}>Search GIF</button>

      {/* GIF Display */}
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {gifs.map((gif) => (
          <img
            key={gif.id}
            src={gif.images.fixed_height.url}
            alt="gif"
            onClick={() => handleGifClick(gif.images.original.url)}
            style={{
              width: "150px",
              height: "150px",
              margin: "10px",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Selected GIF URL Input */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={selectedGif}
          readOnly
          style={{ width: "80%" }}
          placeholder="Clicked GIF URL will appear here"
        />
      </div>

      {/* Display Selected GIF */}
      {selectedGif && (
        <div style={{ marginTop: "20px" }}>
          <h3>Selected GIF:</h3>
          <img src={selectedGif} alt="Selected GIF" />
        </div>
      )}
    </div>
  );
};

export default GifSearch;
