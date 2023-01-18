import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ENDPOINT from "../config/ENDPOINT";

export default function Quest() {
  const [questionare, setQuestionare] = useState([]);
  let { id } = useParams();

  const fetchQuestionare = async () => {
    let res = await fetch(ENDPOINT + `questionare/${id}`);
    let data = await res.json();
    setQuestionare(data);
  };

  useEffect(() => {
    fetchQuestionare();
  }, []);

  return <div>
    <div>{questionare.que}</div>
  </div>;
}
