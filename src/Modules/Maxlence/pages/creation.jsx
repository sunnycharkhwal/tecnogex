import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ENDPOINT from "../config/ENDPOINT";

export function Creation() {
  const [queCat, setQueCat] = useState([]);
  const navigate = useNavigate()

  const fetchCategory = async () => {
    let res = await fetch(ENDPOINT + "question-cat");
    let data = await res.json();
    setQueCat(data);
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  const handleClick = (id, name) => {
    navigate(`/${name}/${id}`)
  }

  return (
    <div>
      <div>Services</div>
      {queCat.map((cat) => {
        return (
          <div key={cat.id}>
            <a onClick={()=> handleClick(cat.id, cat.name)}>{cat.name}</a> <br />
          </div>
        );
      })}
    </div>
  );
}
