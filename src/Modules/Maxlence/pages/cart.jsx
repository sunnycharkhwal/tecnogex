import React, { useEffect, useState } from "react";
import axios from "axios";
import ENDPOINT from "../config/ENDPOINT";
import GooglePayButton from "@google-pay/button-react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Cart({ pack_id, setShowCart }) {
  const [addedPackage, setAddedPackage] = useState([]);
  const [packagePlans, setPackagePlans] = useState([]);
  const [pack, setPack] = useState({});

  const handleCreateOrder = async (data) => {
    try {
      let token = localStorage.getItem("token");

      const res = await axios.post(ENDPOINT + "subscription", data, {
        headers: { "x-access-token": token.replace(/^"(.*)"$/, "$1") },
      });
      if (res.status === 200) {
        alert("Order created successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPackage = async () => {
    let res = await fetch(ENDPOINT + `package/single/${pack_id}`);
    let data = await res.json();
    // console.log(data);
    setAddedPackage(data.package);
    setPackagePlans(data.package_plans);
  };

  useEffect(() => {
    fetchPackage();
  }, [pack_id]);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    let token = localStorage.getItem("token");
    const { data } = await axios.post(
      ENDPOINT + "subscription/order",
      {
        package_plan_id: pack.id,
      },
      {
        headers: { "x-access-token": token },
      }
    );

    const options = {
      key: data.key,
      name: "Maxlence Digital Pvt Ltd",
      description: "Test Transaction",
      // image: { logo },
      order_id: data.order_id,
      handler: async function (response) {
        const data = {
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        };

        const result = await axios.post(
          ENDPOINT + "subscription/payment-success",
          data,
          {
            headers: { "x-access-token": token },
          }
        );

        alert(
          result.data.msg + " Your razorpay order ID is: " + result.data.orderId
        );
      },
      prefill: {
        name: "Test user",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div
      style={{
        width: "50vw",
        height: "50vh",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "silver",
        borderRadius: "5px",
      }}
    >
      <span
        style={{
          width: "30px",
          height: "30px",
          color: "white",
          position: "absolute",
          top: "10px",
          right: "10px",
          cursor: "pointer",
        }}
        onClick={() => setShowCart(false)}
      >
        X
      </span>
      <h1>Cart</h1>
      <h3>{addedPackage.title}</h3> <br />
      {/* <div>
        <div style={{ display: "flex" }}>
          <input
            name="radio"
            type="radio"
            id="radio"
            value={addedPackage.monthly_price}
            checked={selected === addedPackage.monthly_price}
            onChange={(e) => setSelected(e.target.value)}
          />
          &nbsp;
          <label>
            1 Month &nbsp; Price <strong>{addedPackage.monthly_price}</strong>
          </label>
        </div>

        <div style={{ display: "flex" }}>
          <input
            name="radio"
            type="radio"
            value={
              3 * ((addedPackage.monthly_price * addedPackage.discount) / 100)
            }
            checked={
              selected ===
              3 * ((addedPackage.monthly_price * addedPackage.discount) / 100)
            }
            onChange={(e) => setSelected(e.target.value)}
          />
          &nbsp;
          <label>
            3 Months &nbsp; Price
            <strong>
              {3 * ((addedPackage.monthly_price * addedPackage.discount) / 100)}
            </strong>
          </label>
        </div>

        <div style={{ display: "flex" }}>
          <input
            name="radio"
            type="radio"
            value={
              6 * ((addedPackage.monthly_price * addedPackage.discount) / 100)
            }
            checked={
              selected ===
              6 * ((addedPackage.monthly_price * addedPackage.discount) / 100)
            }
            onChange={(e) => setSelected(e.target.value)}
          />
          &nbsp;
          <label>
            6 Months &nbsp; Price
            <strong>
              {6 * ((addedPackage.monthly_price * addedPackage.discount) / 100)}
            </strong>
          </label>
        </div>

        <div style={{ display: "flex" }}>
          <input
            name="radio"
            type="radio"
            value={addedPackage.yearly_price}
            checked={selected === addedPackage.yearly_price}
            onChange={(e) => setSelected(e.target.value)}
          />
          &nbsp;
          <label>
            12 Months &nbsp; Price <strong>{addedPackage.yearly_price}</strong>
          </label>
        </div>
      </div>
      Total: {selected} */}
      <div>
        <label htmlFor="plan">Select Plan: &nbsp;</label>
        <select
          onChange={(e) => {
            let pack_id = e.target.value;
            let pack = packagePlans.find((p) => p.id == pack_id);
            setPack(pack);
          }}
        >
          {packagePlans.map((pack) => {
            return (
              <option key={pack.id} value={pack.id}>
                {pack.price}/{pack.title}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        Total Price : {pack.price} &nbsp;
        <button
          disabled={pack.price === 0}
          onClick={() => alert(`Your order of ${pack.price} is successfull`)}
        >
          Buy Plan
        </button>
        {/* <GooglePayButton
          environment="PRODUCTION"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                    gateway: "braintree",
                    gatewayMerchantId: "mhnf6byzg96g7cfz",
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: "BCR2DN4TXK7ITJSP",
              merchantName: "Shekhar Chauhan",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: "1.00",
              currencyCode: "USD",
              countryCode: "US",
            },
            callbackIntents: ["PAYMENT_AUTHORIZATION"]
          }}
          onLoadPaymentData={(paymentRequest) => {
            console.log("load payment data", paymentRequest);
          }}
          onPaymentAuthorized={(paymentData) => {
            console.log("Payment authorized success", paymentData);
            return {transactionState : "SUCCESS"}
          }}
        /> */}
        <PayPalScriptProvider
          options={{
            "client-id":
              "AXK5pbzXY9J8pcOApb91gmxeE3FMpGdHSQdCiwJDCyIQvgMD0dSNk6lvnstzDQ7gpOci0UG1UorQ01oU",
          }}
        >
          <PayPalButtons
            style={{ layout: "horizontal" }}
            disabled={false}
            forceReRender={[pack]}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: pack.price,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                console.log(details);
                const amount = details.purchase_units[0].amount.value;
                handleCreateOrder({
                  paypal_order_id: details.id,
                  package_id: pack_id,
                  package_plan_id: pack.id,
                  amount: amount,
                });
              });
            }}
          />
        </PayPalScriptProvider>
        <button onClick={displayRazorpay}>Buy with Razorpay</button>
      </div>
    </div>
  );
}
