import { useParams } from "react-router-dom";
let BoardDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Board in question {id}</h1>
    </div>
  );
};
export default BoardDetail;
