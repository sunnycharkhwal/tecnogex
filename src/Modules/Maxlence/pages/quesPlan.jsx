import React from "react";
import logo from "../../Maxlence/assests/maxlogodark.png";

export default function QuesPlan() {
  return (
    <div className="text-center my-5">
      <div class="text-center my-5">
        <img src={logo} alt="logo" />
      </div>

      <h2 className="fs-title my-3">Perfect marketing with perfect Partner</h2>
      <div className="row mt-5 justify-content-center">
        <h3 className="font-italic" style={{ color: "grey" }}>
          on the way to your <span> solution</span>
          <sup>
            <small>
              <a href="#">Buy Plans</a>
            </small>
          </sup>
        </h3>
      </div>
    </div>
  );
}
