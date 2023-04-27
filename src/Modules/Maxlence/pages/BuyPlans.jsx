import { PackageCard } from "../components/PackageCard";
import { useState } from "react";
import EndGif from "../../../img/lo.gif";

export const BuyPlans = () => {
  const [showEndPage, setShowEndPage] = useState(true);
  const End = () => {
    return (
      <>
        <div className="questionare_page_start">
          <div className="questionare_page_end">
            <img
              className="questionare_page_end_logo"
              src="https://wewakedev.github.io/Maxlence-Official-Website/assests/maxlogodark.png"
              alt="logo"
            />
            <h3>Perfect marketing with perfect Partner</h3>
            <img className="gif_img" src={EndGif} alt="gif" />
            <div className="questionare_page_end_hr_div">
              <hr />
            </div>
            <p>
              on the way to your <span> solution</span>
            </p>
            <button onClick={() => setShowEndPage(false)} className=" mt-4">
              Buy Plans
            </button>
          </div>
        </div>
      </>
    );
  };
  return <>{showEndPage ? <Package /> : <Package />}</>;
};

const Package = () => {
  return (
    <>
      <div className=" container mt-5 mb-5">
        <PackageCard />
      </div>
    </>
  );
};
