import { Link } from "react-router-dom";
import { useState } from "react";
export default function TipCard({ bicycle }) {
  const { id, fields } = bicycle;
  const [toggle, setToggle] = useState(false)
  return (
    // <Link to={`/maintenance/${id}`} to={`/safety/${id}`}>
      <div>
        <h1 onClick={() => setToggle(!toggle)}>{fields.subject}</h1>
      {toggle && <div>
        <p>{fields.tip}</p>
        <h3>{fields.name}</h3>
      </div>}
      </div>
    // {/* </Link> */}
    

  )
}