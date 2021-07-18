import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`

export default function NewTips() {
  const [subject, setSubject] = useState("")
  const [tip, setTip] = useState("")
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      category,
      subject,
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
    setSubject("")
    setName("")
    setTip("")
    history.push(`/${res.data.fields.category}`)
  }

  return (
    <div>
      <h1>Your Tips</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>select one</option>
        <option value="maintenance" >Maintenance</option>
        <option value="safety" >Safety</option>
        </select>
        <br />
        <label>Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
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