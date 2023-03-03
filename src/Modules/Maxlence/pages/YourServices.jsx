export const YourServices = () => {
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
            <h3>{props.title}</h3>
            <p className="your_services_card_btn_Monthly">{props.Monthly}</p>
            <p className="your_services_card_btn_1">{props.package}</p>
            <div>
              <button className="btn full_btn ">Track Service</button>
            </div>
            <div className="my_proprogress_div_text">
              <p>{props.proprogress}% Complete</p>
            </div>
            <div className="my_proprogress_div">
              <div
                className="my_proprogress_div_inner "
                style={{ width: props.proprogress + "%" }}
              ></div>
              <div
                className="progress-bar"
                style={{ width: props.proprogress + "%" }}
              ></div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <section className="container mb-4 mt-4">
        <div className="row g-4">
          {CardData.map((val, i) => {
            return <CardApp key={i} {...val} />;
          })}
        </div>
      </section>
    </>
  );
};
