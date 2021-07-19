import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";
import TipsCard from "./TipsCard"

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`



export default function Maintenance() {
  const [bicycle, setBicycle] = useState()
  const [maintenance, setMaintenance] = useState()
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
  
  
  };
  useEffect(() => {
    setMaintenance(bicycle?.filter((bike) => bike.fields.category === 'maintenance'))
  }, [bicycle])

  
  return (
    <div>
      <h1>Maintenance</h1>
      {maintenance !== undefined ? maintenance.map((bike) => (
        <div key={bike.id}>
          <TipsCard key={bike.id} bicycle={bike}/>
        </div> 
      
      )) : null}
      </div>

  )
}
