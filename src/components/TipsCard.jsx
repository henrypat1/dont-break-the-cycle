import { Link } from "react-router-dom";

export default function TipCard(bicycle) {
  const { id, fields } = bicycle;
  return (
    <Link to={`/maintenance/${id}`} to={`/safety/${id}`}>
      <div>
        <h1>{fields.category}</h1>
        <p>{fields.tip}</p>
      </div>
    </Link>
    

  )
}