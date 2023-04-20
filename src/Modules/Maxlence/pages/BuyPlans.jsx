import PackageBlack from "../../../img/packageBlack.svg";
import PackageBlue from "../../../img/packageBlue.svg";
import PackageBlue2 from "../../../img/packageBlue2.svg";
import packageOrange from "../../../img/packageOrange.svg";
import packageGreen2 from "../../../img/packageGreen2.svg";
import packageGreen from "../../../img/packageGreen.svg";
import { PackageCard } from "../components/PackageCard";
import { useState } from "react";
import EndGif from "../../../img/lo.gif";
const CardData = [
  {
    BtnBuyLink: "/",
    CustomeQuote: "/",
    MostPopularDisplay: "none",
    cardColor: "#50B432",
    defaultPackagePointListIcon: packageGreen,
    packageName: "Explainer",

    packageBrif:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
    delPrice: "4,595",
    Price: "4,395",
    PriceType: "$",
    OverviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
    PackagePointList: [
      {
        text: "On location and/or studio video shoot by crew",
        TooltipTitle:
          "Lorem ipsum dolor sit amet consectetur. Felis enim ac sed nec faucibus pellentesque cursus velit. Et elementum sed fringilla sit volutpat lorem a.",
      },
      {
        text: "Script and storyboard writing (one script review)",
      },
      {
        text: "Royalty free music (if required)",
      },
      {
        img: PackageBlack,
        textColor: "black",
        text: "Video conversion for online delivery",
      },
      {
        img: PackageBlack,
        textColor: "black",
        text: "Professional edit suite post-production including",
      },
      {
        text: "One video review for changes",
      },
      {
        text: "Professional Talent can also be provided if required",
      },
      {
        text: "Digital images and logo provided by you",
      },
      {
        text: "Titles, pans, fades, dissolves and transitions-zooms",
      },
    ],
  },
  {
    BtnBuyLink: "/",
    CustomeQuote: "/",
    MostPopularDisplay: "block",
    cardColor: "#0A76E5",
    defaultPackagePointListIcon: PackageBlue,
    packageName: "Starter",
    packageBrif:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
    delPrice: "4,595",
    Price: "4,395",
    PriceType: "$",
    OverviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",

    PackagePointList: [
      {
        text: "On location and/or studio video shoot by crew",
      },
      {
        text: "Script and storyboard writing (one script review)",
      },
      {
        text: "Royalty free music (if required)",
      },
      {
        img: PackageBlack,
        textColor: "black",
        text: "Video conversion for online delivery",
      },
      {
        img: PackageBlack,
        textColor: "black",
        text: "Professional edit suite post-production including",
      },
      {
        text: "One video review for changes",
      },
      {
        text: "Professional Talent can also be provided if required",
      },
      {
        text: "Digital images and logo provided by you",
      },
      {
        text: "Titles, pans, fades, dissolves and transitions-zooms",
      },
    ],
  },
  {
    BtnBuyLink: "/",
    CustomeQuote: "/",
    MostPopularDisplay: "none",
    cardColor: "#4000C9",
    defaultPackagePointListIcon: PackageBlue2,
    packageName: "Popup",
    packageBrif:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
    delPrice: "4,595",
    Price: "4,395",
    PriceType: "$",
    OverviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",

    PackagePointList: [
      {
        text: "On location and/or studio video shoot by crew",
      },
      {
        text: "Script and storyboard writing (one script review)",
      },
      {
        text: "Royalty free music (if required)",
      },
      {
        img: PackageBlack,
        textColor: "black",
        text: "Video conversion for online delivery",
      },
      {
        img: PackageBlack,
        textColor: "black",
        text: "Professional edit suite post-production including",
      },
      {
        text: "One video review for changes",
      },
      {
        text: "Professional Talent can also be provided if required",
      },
      {
        text: "Digital images and logo provided by you",
      },
      {
        text: "Titles, pans, fades, dissolves and transitions-zooms",
      },
    ],
  },
  {
    BtnBuyLink: "/",
    CustomeQuote: "/",
    MostPopularDisplay: "none",
    cardColor: "#C93C00",
    defaultPackagePointListIcon: packageGreen2,
    packageName: "Live",
    packageBrif:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
    delPrice: "4,595",
    Price: "4,395",
    PriceType: "$",
    OverviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",

    PackagePointList: [
      {
        text: "On location and/or studio video shoot by crew",
      },
      {
        text: "Script and storyboard writing (one script review)",
      },
      {
        text: "Royalty free music (if required)",
      },
      {
        img: PackageBlack,
        textColor: "black",
        text: "Video conversion for online delivery",
      },
      {
        img: PackageBlack,
        textColor: "black",
        text: "Professional edit suite post-production including",
      },
      {
        text: "One video review for changes",
      },
      {
        text: "Professional Talent can also be provided if required",
      },
      {
        text: "Digital images and logo provided by you",
      },
      {
        text: "Titles, pans, fades, dissolves and transitions-zooms",
      },
    ],
  },
  {
    BtnBuyLink: "/",
    CustomeQuote: "/",
    MostPopularDisplay: "none",
    cardColor: "#F59300",
    defaultPackagePointListIcon: packageOrange,
    packageName: "Custom",
    packageBrif:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",
    delPrice: "4,595",
    Price: "4,395",
    PriceType: "$",
    OverviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ut dapibus pulvinar lacus amet",

    PackagePointList: [
      {
        text: "On location and/or studio video shoot by crew",
      },
      {
        text: "Script and storyboard writing (one script review)",
      },
      {
        text: "Royalty free music (if required)",
      },
      {
        img: PackageBlack,
        textColor: "black",
        text: "Video conversion for online delivery",
      },
      {
        img: PackageBlack,
        textColor: "black",
        text: "Professional edit suite post-production including",
      },
      {
        text: "One video review for changes",
      },
      {
        text: "Professional Talent can also be provided if required",
      },
      {
        text: "Digital images and logo provided by you",
      },
      {
        text: "Titles, pans, fades, dissolves and transitions-zooms",
      },
    ],
  },
];
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
  return <>{showEndPage ? <End /> : <Package />}</>;
};

const Package = () => {
  return (
    <>
      <div className=" container mt-5 mb-5">
        <PackageCard data={CardData} />
      </div>
    </>
  );
};
