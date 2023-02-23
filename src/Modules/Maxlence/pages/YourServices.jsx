import { useEffect, useState } from "react";
import ENDPOINT from "../config/ENDPOINT";

export const YourServices = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const CardData = [
    {
      title: "Luno Electrical - Creation - Website",
      Monthly: "Monthly",
      package: "Advanced",
      proprogress: "30",
    },
    {
      title: "Luno Electrical - Growth - SEO",
      Monthly: "Monthly",
      package: "Advanced",
      proprogress: "60",
    },
    {
      title: "Luno Electrical - Design - Logo",
      Monthly: "Monthly",
      package: "Advanced",
      proprogress: "40",
    },
  ];
  const CardApp = (props) => {
    return (
      <>
        <div className="col-12">
          <div className="your_services_card">
            <h3>{props.user.fullname}</h3>
            <p className="your_services_card_btn_Monthly">{props.package_plan.title}</p>
            <p className="your_services_card_btn_1">{props.package.title}</p>
            <div>
              <button className="btn full_btn ">Track Service</button>
            </div>
            <div className="my_proprogress_div_text">
              <p>60% Complete</p>
            </div>
            <div className="my_proprogress_div">
              <div
                className="my_proprogress_div_inner "
                style={{ width: 60 + "%" }}
              ></div>
              <div
                className="progress-bar"
                style={{ width: 60 + "%" }}
              ></div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const fetchSubscription = async () => {
    let res = await fetch(ENDPOINT + "subscription");
    let data = await res.json();
    setSubscriptions(data);
  };

  console.log(subscriptions);

  useEffect(() => {
    fetchSubscription();
  }, []);

  return (
    <>
      <section className="container mb-4 mt-4">
        <div className="row g-4">
          {subscriptions.map((val, i) => {
            return <CardApp key={i} {...val} />;
          })}
        </div>
      </section>
    </>
  );
};
