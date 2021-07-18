
import { useState } from "react";
export default function TipCard({ bicycle }) {
  const { id, fields } = bicycle;
  const [toggle, setToggle] = useState(false)
  return (
    // <Link to={`/maintenance/${id}`} to={`/safety/${id}`}>
    <div key={id} >
      
        <h1 className= "subject" onClick={() => setToggle(!toggle)}>{fields.subject}</h1>
      {toggle && <div>
        <p className= "tip">{fields.tip}</p>
        <h3 className="name">{fields.name}</h3>
      </div>}
      </div>
    // {/* </Link> */}
    

  )
}