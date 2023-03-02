import Wifi from "../../../img/wifi.png";
import Sim from "../../../img/sim.png";
import { MdOutlineModeEdit } from "react-icons/md";
import { Nav, Tab } from "react-bootstrap";
import GpayImg from "../../../img/gpay.png";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import React, { useState } from "react";

import {
  formatCreditCardNumber,
  formatCVV,
  formatExpirationDate,
} from "./utils";

import "react-credit-cards/es/styles-compiled.css";

export const Checkout = () => {
  return (
    <>
      <section className=" container mt-5 mb-5">
        <div className="row g-4">
          <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="row">
              <Address />
              <SavedCards />
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
            <OrderSummary />
          </div>
          <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
            <AddNewCard />
          </div>
        </div>
      </section>
    </>
  );
};
const Address = () => {
  return (
    <div className="col-12">
      <div className="payment_main_title ">
        <h3>Billing Address</h3>
      </div>
      <div className="payment_card checkout_address">
        <MdOutlineModeEdit />
        <h3>Luno Electrical</h3>
        <p>
          525, 5th Floor, Tower A, Itech Business Park, Sohna Road, Sector 49,
          Gurgaon, Haryana 122101 - India
        </p>
        <p>Contact No - 9876543210</p>
        <p>Email - info@lunoelectrical.com.au</p>
      </div>
    </div>
  );
};
const SavedCards = () => {
  const CardData = [
    {
      cardType: "Credit Card",
      cardCompany: "visa",
      holder: "Jack Lewis",
      month: "01",
      years: "30",
      id: "1",
    },
    {
      cardType: "Credit Card",
      cardCompany: "visa",
      holder: "Jack Lewis",
      month: "01",
      years: "30",
      id: "2",
    },
  ];
  const CardApp = (props) => {
    return (
      <>
        <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="saved_cards_div ">
            <div className="saved_cards_wifi">
              <img src={Wifi} alt="wifi" />
              <p>{props.cardType}</p>
            </div>
            <h1>{props.cardCompany}</h1>
            <div className="saved_cards_number ">
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
            <div>
              <div className="form-check saved_cards_input">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id={props.id}
                />
                <label className="form-check-label" htmlFor={props.id}></label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="col-12">
        <div className="payment_main_title mt-5">
          <h3>Saved Cards</h3>
        </div>
        <div className="row g-3">
          {CardData.map((val, i) => {
            return <CardApp key={i} {...val} />;
          })}
        </div>
      </div>
    </>
  );
};
const OrderSummary = () => {
  const PriceListData = [
    {
      title: "Luno Electrical - Creation - Website",
      packageName: "Advanced",
      packageDuring: "Monthly",
      price: "2000",
    },
    {
      title: "Luno Electrical - Creation - Website",
      packageName: "Advanced",
      packageDuring: "Monthly",
      price: "2000",
    },
  ];
  const PriceListApp = (props) => {
    return (
      <>
        <div className="order_summary_details_div">
          <p style={{ fontWeight: "660" }}>{props.title}</p>
          <p style={{ color: "#212529" }}>{props.packageName}</p>
          <p style={{ color: "#6D6D6D" }}>{props.packageDuring}</p>
          <div className="order_summary_price_div">
            <b>${props.price}</b>
          </div>
          <hr />
        </div>
      </>
    );
  };
  return (
    <>
      <div className="order_summary_div">
        <div className="order_summary_div_title">
          order summary <MdOutlineModeEdit /> <span>03</span>
          <hr />
        </div>
        {PriceListData.map((val, i) => {
          return <PriceListApp key={i} {...val} />;
        })}

        <div className="order_summary_voucher_div">
          Have a voucher?
          <hr />
        </div>
        <div>
          <div className="row g-2">
            <div className="col-12">
              <div className="row">
                <div className="col-6 order_summary_total_title">Sub Total</div>
                <div className="col-6 order_summary_total_price">$6000</div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-6 order_summary_total_title">GST 12%</div>
                <div className="col-6 order_summary_total_price">$720</div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div>
          <div className="row g-2">
            <div className="col-12">
              <div className="row">
                <div className="col-6 order_summary_total_title">Total</div>
                <div className="col-6 order_summary_total_price">$6720</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AddNewCard = () => {
  return (
    <>
      <div className="col-12">
        <div className="payment_main_title mt-5">
          <h3>Other Payment Modes</h3>
        </div>
        <div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="row">
              <div className="col-12">
                <div className="payment_modes_tab_div">
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Credit / Debit Card</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Net Banking</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="upi" className="gpay_link">
                        Pay with <img src={GpayImg} alt="gpay" />
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <div className="col-12">
                <Tab.Content className="mt-3">
                  <Tab.Pane eventKey="first">
                    <CardForm />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">2</Tab.Pane>
                  <Tab.Pane eventKey="upi">3</Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};

const CardForm = () => {
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
    issuer: "",
    focused: "",
    formData: null,
  });

  // const handleCallback = ({ issuer }, isValid) => {
  //   if (isValid) {
  //     setState({ issuer });
  //   }
  // };

  const handleInputFocus = ({ target }) => {
    setState({
      focused: target.name,
    });
  };

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvv") {
      target.value = formatCVV(target.value);
    }

    setState({ [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have finished payment!");
    // form.reset();
    // setState({
    //   number: "",
    //   name: "",
    //   expiry: "",
    //   cvv: "",
    //   issuer: "",
    //   focused: "",
    //   formData: null,
    // });
  };

  const { issuer } = state;
  // const label = { inputProps: { "aria-label": "Switch demo" } };
  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
      },
      "&:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      "&:after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 16,
      height: 16,
      margin: 2,
    },
  }));
  const navigate = useNavigate();
  return (
    <div key="Payment">
      <div className="App-payment">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12">
              <div className="row g-3">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="form-group card_input_div">
                    <small>Card Number</small>
                    <input
                      type="tel"
                      name="number"
                      className="form-control"
                      placeholder="Card Number"
                      pattern="[\d| ]{16,22}"
                      maxLength="19"
                      required
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="form-group card_input_div">
                    <small>Name on card</small>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      pattern="[a-z A-Z-]+"
                      required
                      autoComplete="off"
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row g-3">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                  <div className="form-group card_input_div">
                    <small>Expiration Date</small>
                    <input
                      type="tel"
                      name="expiry"
                      className="form-control"
                      placeholder="Valid Thru"
                      pattern="\d\d/\d\d"
                      required
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                  <div className="form-group card_input_div">
                    <small>CVC</small>
                    <input
                      type="tel"
                      name="cvv"
                      className="form-control"
                      placeholder="CVV"
                      pattern="\d{3}"
                      required
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="my_switch">
                <FormGroup>
                  <FormControlLabel
                    control={<Android12Switch defaultChecked />}
                    label="Save this card"
                  />
                </FormGroup>
              </div>
            </div>
            <div className="col-12">
              <hr />
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-6 col-sm-12 col-12 checkout_back_btn_div">
                  <div
                    className="checkout_back_btn"
                    onClick={() => navigate(-1)}
                  >
                    <span>
                      <HiArrowNarrowLeft />
                    </span>
                    Back to cart
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 checkout_btn">
                  <div>
                    <input type="hidden" name="issuer" value={issuer} />
                    <div className="form-actions">
                      <button className=" brn full_btn checkout_btn">
                        Make Payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
