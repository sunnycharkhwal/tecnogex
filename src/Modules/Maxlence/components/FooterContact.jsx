import { NavLink } from "react-router-dom";
export const FooterContact = (props) => {
  return (
    <>
      <div className="container-fluid mt-5" style={{ background: "#f5f5f5" }}>
        <div className="row justify-content-center py-5">
          <div className="col-12 text-center">
            <h2 className=" bottom_contact_title">
              {props.title}
              <br />
              {props.title2}
            </h2>
          </div>
          <div className="getstarted text-center col-12 ">
            <NavLink to="/getintouch" className="whitebgbtn fontrale mt-3">
              Get In Touch &#10230;
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
