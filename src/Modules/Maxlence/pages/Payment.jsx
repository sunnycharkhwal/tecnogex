import Wifi from "../../../img/wifi.png";
import Sim from "../../../img/sim.png";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
export const Payment = () => {
  const CardData = [
    {
      cardType: "Credit Card",
      cardCompany: "visa",
      holder: "Jack Lewis",
      month: "01",
      years: "30",
    },
    {
      cardType: "Credit Card",
      cardCompany: "visa",
      holder: "Jack Lewis",
      month: "01",
      years: "30",
    },
    {
      cardType: "Credit Card",
      cardCompany: "visa",
      holder: "Jack Lewis",
      month: "01",
      years: "30",
    },
    {
      cardType: "Credit Card",
      cardCompany: "visa",
      holder: "Jack Lewis",
      month: "01",
      years: "30",
    },
  ];
  const CardApp = (props) => {
    return (
      <>
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="saved_cards_div">
            <div className="saved_cards_wifi">
              <img src={Wifi} alt="wifi" />
              <p>{props.cardType}</p>
            </div>
            <h1>{props.cardCompany}</h1>
            <div className="saved_cards_number">
              <p>
                <span>1234</span>
                <span>5678</span>
                <span>9101</span>
                <span>1121</span>
              </p>
              <img src={Sim} alt="sim" />
            </div>
            <p className="saved_cards_name">{props.holder}</p>
            <p className="saved_cards_date">
              {props.month}/{props.years}
            </p>
            <div className="saved_cards_div_over_div">
              <div className="saved_cards_div_over">
                <span className="saved_cards_div_over_edit">
                  <MdOutlineModeEdit />
                </span>
                <span className="saved_cards_div_over_delete">
                  <RiDeleteBin6Line />
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <section className=" container mt-5 mb-5">
        <div className="row">
          <div className="col-12">
            <div>
              <div className="payment_main_title">
                <h3>Billing Address</h3>
              </div>
              <div className="payment_card">
                <MdOutlineModeEdit />
                <h3>Luno Electrical</h3>
                <p>
                  525, 5th Floor, Tower A, Itech Business Park, Sohna Road,
                  Sector 49, Gurgaon, Haryana 122101 - India
                </p>
                <p>Contact No - 9876543210</p>
                <p>Email - info@lunoelectrical.com.au</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="payment_main_title mt-5">
              <h3>Saved Cards</h3>
            </div>
            <div className="row g-3">
              {CardData.map((val, i) => {
                return <CardApp key={i} {...val} />;
              })}
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card_add_new">
                  <AiOutlinePlus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
