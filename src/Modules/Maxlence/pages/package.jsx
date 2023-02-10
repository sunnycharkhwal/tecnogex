import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ENDPOINT from "../config/ENDPOINT";
import parse from "html-react-parser";
import Switch from "@mui/material/Switch";
import Cart from "./cart";

export default function Package() {
  const [packages, setPackages] = useState([]);
  const [checked, setChecked] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [pack_id, setPack_id] = useState();
  let { id } = useParams();

  const fetchPackages = async () => {
    let res = await fetch(ENDPOINT + `package/${id}`);
    let data = await res.json();
    setPackages(data);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleClick = (id) => {
    setPack_id(id);
    setShowCart(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Monthly
      <Switch
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{ "aria-label": "controlled" }}
      />
      Yearly
      {showCart ? <Cart pack_id={pack_id} setShowCart={setShowCart} /> : null}
      <div style={{ display: "flex", margin: "2rem" }}>
        {packages.map((pack, idx) => {
          return (
            <div style={{ marginLeft: "4rem" }} key={idx}>
              <h2>{pack.title}</h2>
              {parse(pack.desc)}
              {!checked ? (
                <h5>
                  <b>{pack.monthly_price}</b>/mo
                </h5>
              ) : (
                <h5>
                  <b>{pack.yearly_price}</b>/mo
                </h5>
              )}
              {parse(pack.overview)}
              <button onClick={() => handleClick(pack.id)}>Buy now</button>
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
