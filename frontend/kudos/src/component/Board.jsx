const Board = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.url} />
      <p>{props.description}</p>
      <button>View Board</button>
      <button>delete board</button>
    </div>
  );
};

export default Board;
