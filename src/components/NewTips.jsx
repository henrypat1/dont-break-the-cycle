import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`

export default function NewTips() {
  const [category, setCategory] = useState("")
  const [tip, setTip] = useState("")
  const [name, setName] = useState("")
  const [cycling, setCycling] = useState("")
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      cycling,
      category,
      tip,
    };
    const res = await axios.post(
      URL,
      { fields },
      {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
      }
    );
    console.log(res);
    setCategory("")
    setName("")
    setTip("")
    history.push(`/${res.data.fields.cycling}/${res.data.id}`)
  }

  return (
    <div>
      Your tips
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>tip type</label>
        <select value={cycling} onChange={(e) => setCycling(e.target.value)}>
        <option>select one</option>
        <option value="maintenance" >Maintenance</option>
        <option value="safety" >Safety</option>
        </select>
        <br />
        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <br />
        <label>Tip</label>
        <input
          type="text"
          value={tip}
          onChange={(e) => setTip(e.target.value)}
        />
        <br />
        <button>Submit Tip</button>
      </form>
    </div>
  )

}