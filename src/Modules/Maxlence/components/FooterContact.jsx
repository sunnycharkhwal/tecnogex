import { NavLink } from "react-router-dom";
export const FooterContact = () => {
  return (
    <>
      <div className="container-fluid mt-5" style={{ background: "#f5f5f5" }}>
        <div className="row justify-content-center py-5">
          <div className="col-12 text-center">
            <h1 className="text-dark" style={{ marginBottom: "2.5rem" }}>
              We’d love to be your partner
            </h1>
          </div>
          <div className="getstarted text-center col-12 ">
            <NavLink to="/getintouch2" className="whitebgbtn fontrale mt-3">
              Get In Touch &#10230;
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
