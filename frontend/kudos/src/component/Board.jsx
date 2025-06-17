import { Link } from "react-router-dom";
const Board = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.url} />
      <p>{props.description}</p>
      <Link to={`/board/${props.id}`}> View details</Link>
      <button>delete board</button>
    </div>
  );
};

export default Board;
