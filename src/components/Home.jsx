import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`



export default function Home() {

  const [bicycle, setBicycle] = useState()
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    
    const res = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`
      },
    });
    console.log(res.data.records)
    setBicycle(res.data.records);
    console.log(bicycle)
  };

  return (
    <div>
      <h1>Dont Break the Cycle</h1>
      <p>
        Cycling can be fun and adventurous, but if your not careful it can also be dangerous.
        
    </p>
    </div>
   
  )
}
